import { PrismaClient } from "@prisma/client";
import { ratings } from "./constants/ratings";
import { users } from "./constants/user";
import { categories } from "./constants/categories";
import { books } from "./constants/books";
import { authors } from "./constants/author";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.bookRating.deleteMany();
    await prisma.user.deleteMany();
    await prisma.bookCategory.deleteMany();
    await prisma.book.deleteMany();
    await prisma.category.deleteMany();
    await prisma.author.deleteMany();

    console.log("Dados antigos deletados com sucesso.");

    for (const user of users) {
      await prisma.user.create({
        data: {
          id: user.id,
          name: user.name,
          email: user.email ?? "",
          avatarUrl: user.avatar_url,
        },
      });
    }

    console.log("Usuários inseridos com sucesso.");

    for (const category of categories) {
      await prisma.category.create({
        data: category,
      });
    }

    console.log("Categorias inseridas com sucesso.");

    for (const author of authors) {
      await prisma.author.create({
        data: author,
      });
    }

    console.log("Autores inseridos com sucesso.");

    for (const book of books) {
      const { bookscategories, ...bookData } = book;

      console.log(
        `Tentando conectar livro ${book.name} ao autor ${book.author.connect.id}`,
      );

      const createdBook = await prisma.book.create({
        data: {
          ...bookData,
          slug: book.name.toLowerCase().replace(/\s+/g, "-"),
          author: {
            connect: { id: book.author.connect.id },
          },
          bookscategories: {
            create: bookscategories.create.map((item) => ({
              category: { connect: { id: item.category.connect.id } },
            })),
          },
        },
      });

      console.log(`Livro inserido: ${createdBook.name}`);
    }

    console.log("Livros inseridos com sucesso.");

    for (const rating of ratings) {
      const createdRating = await prisma.bookRating.create({
        data: {
          rating: rating.rating,
          comment: rating.comment,
          userId: rating.userId,
          bookId: rating.bookId,
        },
      });

      console.log(
        `Avaliação inserida para o livro ID ${createdRating.bookId} pelo usuário ID ${createdRating.userId}`,
      );
    }

    console.log("Avaliações inseridas com sucesso.");

    console.log("Dados populados com sucesso!");
  } catch (error) {
    console.error("Erro ao popular dados:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

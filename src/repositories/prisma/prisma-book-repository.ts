import { Prisma, Book } from '@prisma/client'
import { BooksRepository, TopRatedBook } from '../books-repository'
import { prisma } from '@/libs/db'

export class PrismaBookRepository implements BooksRepository {
  async findTopRatedBooks(limit: number): Promise<TopRatedBook[]> {
    const topRatedBooks: TopRatedBook[] = await prisma.$queryRaw`
      SELECT
        b.id,
        b.name,
        b.cover_url AS "coverUrl",
        b.description,
      
        b."authorId",
        AVG(br.rating) AS "averageRating"
      FROM
        books b
      JOIN
        book_ratings br ON b.id = br."bookId"
      GROUP BY
        b.id, b.name, b.cover_url, b.description, b.created_at, b."authorId"
      ORDER BY
        "averageRating" DESC
      LIMIT
        ${limit}
    `

    return topRatedBooks
  }

  async findById(id: string): Promise<Book | null> {
    const book = await prisma.book.findUnique({
      where: {
        id,
      },
    })
    return book
  }

  async create(data: Prisma.BookUncheckedCreateInput): Promise<Book> {
    const createdBook = await prisma.book.create({
      data,
    })
    return createdBook
  }
}

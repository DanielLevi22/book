import { Book, Prisma } from '@prisma/client'
import { BooksRepository } from '../books-repository'

export class InMemoryBookRepository implements BooksRepository {
  items: Book[] = []

  async findById(id: string) {
    const book = this.items.find((book) => book.id === id)
    return book || null
  }

  async create(data: Prisma.BookUncheckedCreateInput) {
    const book = {
      id: crypto.randomUUID(),
      name: data.name,
      coverUrl: data.coverUrl,
      description: data.description,
      slug: data.slug,
      totalPages: data.totalPages,
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: data.authorId,
    }

    this.items.push(book)

    return book
  }
}

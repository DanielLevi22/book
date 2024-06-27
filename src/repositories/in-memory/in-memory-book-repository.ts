import { Book } from '@prisma/client'

export class InMemoryBookRepository {
  items: Book[] = []

  async findById(id: string) {
    const book = this.items.find((book) => book.id === id)
    return book || null
  }
}

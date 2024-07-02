import { Book, Prisma } from '@prisma/client'
import { BooksRepository } from '../books-repository'
import crypto from 'crypto'

export class InMemoryBookRepository implements BooksRepository {
  items: Book[] = []
  ratings: { bookId: string; rating: number }[] = []

  async findById(id: string): Promise<Book | null> {
    const book = this.items.find((book) => book.id === id)
    return book || null
  }

  async findTopRatedBooks(limit: number) {
    const topRatedBooks = this.items
      .map((book) => {
        const bookRatings = this.ratings.filter(
          (rating) => rating.bookId === book.id,
        )
        const averageRating =
          bookRatings.length > 0
            ? bookRatings.reduce((acc, curr) => acc + curr.rating, 0) /
              bookRatings.length
            : 0

        return {
          ...book,
          averageRating,
        }
      })
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, limit)
    return topRatedBooks
  }

  async create(data: Prisma.BookUncheckedCreateInput): Promise<Book> {
    const book: Book = {
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

  async createRating(bookId: string, rating: number): Promise<void> {
    this.ratings.push({ bookId, rating })
  }
}

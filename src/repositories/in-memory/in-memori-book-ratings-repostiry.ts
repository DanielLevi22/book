import { BookRating, Prisma } from '@prisma/client'

export class InMemoryBookRatingsRepository {
  items: BookRating[] = []

  async create(data: Prisma.BookRatingUncheckedCreateInput) {
    const bookRating = {
      id: crypto.randomUUID(),
      rating: data.rating,
      comment: data.comment,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: data.userId,
      bookId: data.bookId,
    }

    this.items.push(bookRating)

    return bookRating
  }
}

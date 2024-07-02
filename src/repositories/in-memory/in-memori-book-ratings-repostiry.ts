import { BookRating, Prisma } from '@prisma/client'
import { BookRatingsRepository, RecentReview } from '../book-ratings-repository'
import { faker } from '@faker-js/faker'

export class InMemoryBookRatingsRepository implements BookRatingsRepository {
  items: BookRating[] = []

  async findRecentReviews(): Promise<RecentReview[]> {
    const sortedItems = this.items.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    )

    const reviews = sortedItems.map((review) => ({
      id: review.id,
      rating: review.rating,
      createdAt: review.createdAt,
      user: {
        name: faker.name.fullName(),
        avatarUrl: faker.image.avatar(),
      },
      book: {
        coverUrl: faker.image.imageUrl(),
        name: faker.random.word(),
        description: faker.lorem.paragraph(),
        author: {
          name: faker.name.fullName(),
        },
      },
    }))

    return reviews
  }

  async findAll(): Promise<BookRating[]> {
    return this.items.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    )
  }

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

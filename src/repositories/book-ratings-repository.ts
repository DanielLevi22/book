import { BookRating, Prisma } from '@prisma/client'
export interface RecentReview {
  id: string
  rating: number
  createdAt: Date
  user: {
    name: string
    avatarUrl: string | null
  }
  book: {
    coverUrl: string
    name: string
    description: string
    author: {
      name: string
    }
  }
}
export interface BookRatingsRepository {
  findAll(): Promise<BookRating[]>
  findRecentReviews(): Promise<RecentReview[]>
  create(data: Prisma.BookRatingUncheckedCreateInput): Promise<BookRating>
}

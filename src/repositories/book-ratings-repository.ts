import { BookRating, Prisma } from '@prisma/client'

export interface BookRatingsRepository {
  create(data: Prisma.BookRatingUncheckedCreateInput): Promise<BookRating>
}

import { Prisma } from '@prisma/client'
import { BookRatingsRepository } from '../book-ratings-repository'
import { prisma } from '@/libs/db'

export class PrismaBookRatings implements BookRatingsRepository {
  create(data: Prisma.BookRatingUncheckedCreateInput) {
    return prisma.bookRating.create({
      data,
    })
  }
}

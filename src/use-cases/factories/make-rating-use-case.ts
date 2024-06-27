import { PrismaBookRatingsRepository } from '@/repositories/prisma/prisma-book-ratings-repostiry'
import { BookRatingUseCase } from '../book-rating-use-case'
import { PrismaBookRepository } from '@/repositories/prisma/prisma-book-repository'

export function makeRatingUseCase() {
  const bookRatingRepository = new PrismaBookRatingsRepository()
  const bookRepository = new PrismaBookRepository()

  const bookRatingUseCase = new BookRatingUseCase(
    bookRatingRepository,
    bookRepository,
  )
  return bookRatingUseCase
}

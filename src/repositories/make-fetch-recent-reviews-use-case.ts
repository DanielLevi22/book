import { FetchRecentReviewsUseCase } from '@/use-cases/fetch-recent-reviews-use-case'
import { PrismaBookRatingsRepository } from './prisma/prisma-book-ratings-repostiry'

export function makeFetchRecentReviewsUseCase() {
  const bookRaingsRepository = new PrismaBookRatingsRepository()

  const fetchRecentReviewsUseCase = new FetchRecentReviewsUseCase(
    bookRaingsRepository,
  )
  return fetchRecentReviewsUseCase
}

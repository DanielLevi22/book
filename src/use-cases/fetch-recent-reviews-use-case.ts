import {
  BookRatingsRepository,
  RecentReview,
} from '@/repositories/book-ratings-repository'

interface FetchRecentReviewsUseCaseResponse {
  recentReviews: RecentReview[]
}

export class FetchRecentReviewsUseCase {
  constructor(private bookRaingsRepository: BookRatingsRepository) {}

  async execute(): Promise<FetchRecentReviewsUseCaseResponse> {
    const reviews = await this.bookRaingsRepository.findRecentReviews()

    return {
      recentReviews: reviews,
    }
  }
}

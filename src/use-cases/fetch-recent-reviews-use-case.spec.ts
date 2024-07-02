import { InMemoryBookRatingsRepository } from '@/repositories/in-memory/in-memori-book-ratings-repostiry'
import { FetchRecentReviewsUseCase } from './fetch-recent-reviews-use-case'
let inMemoryBookRatingsRepository: InMemoryBookRatingsRepository
let sut: FetchRecentReviewsUseCase
describe('Fetch recent reviews use case', () => {
  beforeEach(() => {
    inMemoryBookRatingsRepository = new InMemoryBookRatingsRepository()
    sut = new FetchRecentReviewsUseCase(inMemoryBookRatingsRepository)
  })

  it('should be able to fetch recent reviews', async () => {
    inMemoryBookRatingsRepository = new InMemoryBookRatingsRepository()
    sut = new FetchRecentReviewsUseCase(inMemoryBookRatingsRepository)

    await inMemoryBookRatingsRepository.create({
      rating: 5,
      comment: 'Great book!',
      userId: 'user-1',
      bookId: 'book-1',
    })

    const { recentReviews } = await sut.execute()

    expect(recentReviews).toHaveLength(1)
  })

  it('should fetch reviews in descending order of creation date', async () => {
    const inMemoryBookRatingsRepository = new InMemoryBookRatingsRepository()
    const sut = new FetchRecentReviewsUseCase(inMemoryBookRatingsRepository)

    const reviewsData = [
      {
        rating: 5,
        comment: 'Excellent book!',
        userId: 'user-1',
        bookId: 'book-1',
        createdAt: new Date('2024-07-01T10:00:00Z'),
      },
      {
        rating: 4,
        comment: 'Very good book!',
        userId: 'user-2',
        bookId: 'book-2',
        createdAt: new Date('2024-07-02T10:00:00Z'),
      },
      {
        rating: 3,
        comment: 'Good book!',
        userId: 'user-3',
        bookId: 'book-3',
        createdAt: new Date('2024-07-03T10:00:00Z'),
      },
    ]

    for (const reviewData of reviewsData) {
      await inMemoryBookRatingsRepository.create(reviewData)
    }

    const { recentReviews } = await sut.execute()

    expect(recentReviews).toHaveLength(3)

    for (let i = 0; i < recentReviews.length - 1; i++) {
      expect(recentReviews[i].createdAt.getTime()).toBeGreaterThanOrEqual(
        recentReviews[i + 1].createdAt.getTime(),
      )
    }
  })
})

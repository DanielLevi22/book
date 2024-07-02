import { InMemoryBookRatingsRepository } from '@/repositories/in-memory/in-memori-book-ratings-repostiry'
import { InMemoryBookRepository } from '@/repositories/in-memory/in-memory-book-repository'
import { FetchPopularBooksUseCase } from './fetch-popular-books-use-case'

let inMemoryBookRepository: InMemoryBookRepository
let inMemoryBookRatingsRepository: InMemoryBookRatingsRepository
let sut: FetchPopularBooksUseCase
describe('Fetch popular books use case', () => {
  beforeEach(() => {
    inMemoryBookRepository = new InMemoryBookRepository()
    inMemoryBookRatingsRepository = new InMemoryBookRatingsRepository()
    sut = new FetchPopularBooksUseCase(inMemoryBookRepository)
  })

  it('should be able to popular books ', async () => {
    const book = await inMemoryBookRepository.create({
      authorId: 'author-1',
      coverUrl: 'https://cover-url.com',
      description: 'Description',
      name: 'Book name',
      slug: 'book-1',
      totalPages: 100,
    })
    await inMemoryBookRatingsRepository.create({
      rating: 5,
      comment: 'Great book!',
      userId: 'user-1',
      bookId: book.id,
    })

    const { topRatedBooks } = await sut.execute()

    expect(topRatedBooks).toHaveLength(1)
  })
})

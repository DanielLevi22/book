import { InMemoryBookRatingsRepository } from '@/repositories/in-memory/in-memori-book-ratings-repostiry'
import { BookRatingUseCase } from './book-rating-use-case'
import { InMemoryBookRepository } from '@/repositories/in-memory/in-memory-book-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

let bookRatingRepository: InMemoryBookRatingsRepository
let bookRepository: InMemoryBookRepository
let sut: BookRatingUseCase
describe('Book rating use case', async () => {
  beforeEach(() => {
    bookRatingRepository = new InMemoryBookRatingsRepository()
    bookRepository = new InMemoryBookRepository()

    sut = new BookRatingUseCase(bookRatingRepository, bookRepository)
  })

  it('should be a to  rating a book', async () => {
    bookRepository.items.push({
      id: 'book-id',
      name: 'The Great Book',
      coverUrl: 'https://example.com/cover.png',
      description: 'A great book',
      slug: 'the-great-book',
      totalPages: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: 'author-id',
    })

    const { bookRating } = await sut.execute({
      rating: 5,
      comment: 'Great book',
      userId: 'user-id',
      bookId: 'book-id',
    })

    expect(bookRating.rating).toEqual(5)
    expect(bookRating.comment).toEqual('Great book')
  })
  it('should not be a to  rating a if a book  already exists', async () => {
    bookRepository.items.push({
      id: 'book-id',
      name: 'The Great Book',
      coverUrl: 'https://example.com/cover.png',
      description: 'A great book',
      slug: 'the-great-book',
      totalPages: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: 'author-id',
    })

    expect(async () => {
      await sut.execute({
        rating: 5,
        comment: 'Great book',
        userId: 'user-id',
        bookId: 'book-not-exists',
      })
    }).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

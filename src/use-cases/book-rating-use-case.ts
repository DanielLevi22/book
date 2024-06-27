import { BookRating } from '@prisma/client'
import { BookRatingsRepository } from '@/repositories/book-ratings-repository'
import { BooksRepository } from '@/repositories/books-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
interface BookRatingRequest {
  rating: number
  comment: string
  userId: string
  bookId: string
}
interface BookRatingResponse {
  bookRating: BookRating
}

export class BookRatingUseCase {
  constructor(
    private bookRatingsRepository: BookRatingsRepository,
    private bookRepository: BooksRepository,
  ) {}

  async execute({
    rating,
    comment,
    bookId,
    userId,
  }: BookRatingRequest): Promise<BookRatingResponse> {
    const book = await this.bookRepository.findById(bookId)

    if (!book) {
      throw new ResourceNotFoundError()
    }
    const bookRating = await this.bookRatingsRepository.create({
      rating,
      comment,
      userId,
      bookId: book.id,
    })

    return { bookRating }
  }
}

import { BooksRepository } from '@/repositories/books-repository'

export class FetchPopularBooksUseCase {
  constructor(private repository: BooksRepository) {}

  async execute() {
    const topRatedBooks = await this.repository.findTopRatedBooks(5)

    return {
      topRatedBooks,
    }
  }
}

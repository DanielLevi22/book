import { PrismaBookRepository } from '@/repositories/prisma/prisma-book-repository'
import { FetchPopularBooksUseCase } from '../fetch-popular-books-use-case'

export function makeFetchPopularBooksUseCase() {
  const prismaBookRepository = new PrismaBookRepository()
  const fetchPopularBooksUseCase = new FetchPopularBooksUseCase(
    prismaBookRepository,
  )

  return fetchPopularBooksUseCase
}

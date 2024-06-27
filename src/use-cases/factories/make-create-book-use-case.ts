import { CreateBookUseCase } from '../create-book-use-case'
import { PrismaBookRepository } from '@/repositories/prisma/prisma-book-repository'
import { PrismaAuthorRepository } from '@/repositories/prisma/prisma-author-repository'

export function makeCreateBookUseCase() {
  const authorRepository = new PrismaAuthorRepository()
  const bookRepository = new PrismaBookRepository()
  const createBookUseCase = new CreateBookUseCase(
    bookRepository,
    authorRepository,
  )
  return createBookUseCase
}

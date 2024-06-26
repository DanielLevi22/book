import { Book, Prisma } from '@prisma/client'

export interface BooksRepository {
  findById(id: string): Promise<Book | null>
  create(data: Prisma.BookUncheckedCreateInput): Promise<Book>
}

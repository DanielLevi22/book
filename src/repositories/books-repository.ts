import { Book } from '@prisma/client'

export interface BooksRepository {
  findById(id: string): Promise<Book | null>
}

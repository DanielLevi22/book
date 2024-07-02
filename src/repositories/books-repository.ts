import { Book, Prisma } from '@prisma/client'
export interface TopRatedBook {
  id: string
  name: string
  coverUrl: string
  description: string
  authorId: string
  averageRating: number
}
export interface BooksRepository {
  findById(id: string): Promise<Book | null>
  create(data: Prisma.BookUncheckedCreateInput): Promise<Book>
  findTopRatedBooks(limit: number): Promise<TopRatedBook[]>
}

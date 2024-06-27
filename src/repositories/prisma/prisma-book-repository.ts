import { Prisma } from '@prisma/client'
import { BooksRepository } from '../books-repository'
import { prisma } from '@/libs/db'

export class PrismaBookRepository implements BooksRepository {
  async findById(id: string) {
    const book = await prisma.book.findUnique({
      where: {
        id,
      },
    })
    return book
  }

  async create(data: Prisma.BookUncheckedCreateInput) {
    return await prisma.book.create({
      data,
    })
  }
}

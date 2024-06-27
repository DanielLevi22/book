import { prisma } from '@/libs/db'
import { Prisma } from '@prisma/client'

export class PrismaAuthorRepository implements AuthorRepository {
  async findById(id: string) {
    const author = await prisma.author.findUnique({
      where: {
        id,
      },
    })
    return author
  }

  async create(data: Prisma.AuthorUncheckedCreateInput) {
    const author = await prisma.author.create({
      data,
    })
    return author
  }
}

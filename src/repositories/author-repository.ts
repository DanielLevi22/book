import { Author, Prisma } from '@prisma/client'

export interface AuthorRepository {
  findById(id: string): Promise<Author | null>
  create(data: Prisma.AuthorUncheckedCreateInput): Promise<Author>
}

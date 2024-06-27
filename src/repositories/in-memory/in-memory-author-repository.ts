import { Author, Prisma } from '@prisma/client'
import { AuthorRepository } from '../author-repository'

export class InMemoryAuthorRepository implements AuthorRepository {
  items: Author[] = []

  async findById(id: string) {
    const author = this.items.find((author) => author.id === id)
    return author || null
  }

  async create(data: Prisma.AuthorUncheckedCreateInput) {
    const author = {
      id: data.id ?? crypto.randomUUID(),
      name: data.name,
      biography: data.biography ?? null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(author)

    return author
  }
}

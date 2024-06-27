import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findById(id: string) {
    const user = this.items.find((user) => user.id === id)
    return user || null
  }

  async findByUsername(username: string) {
    const user = this.items.find((user) => user.username === username)
    return user || null
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user) => user.email === email)
    return user || null
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email || null,
      username: data.username || null,
      passwordHash: data.passwordHash || null,
      avatarUrl: data.avatarUrl || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(user)

    return user
  }
}

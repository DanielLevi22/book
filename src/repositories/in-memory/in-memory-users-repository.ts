import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  async findByUsername(username: string) {
    const user = this.items.find((user) => user.username === username)
    return user || null
  }

  public items: User[] = []

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

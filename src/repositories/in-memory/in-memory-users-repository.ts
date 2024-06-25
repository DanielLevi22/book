import { User } from '@prisma/client'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user) => user.email === email)
    return user || null
  }

  async create(data: User) {
    const user = {
      id: '1',
      name: data.name,
      email: data.email,
      avatarUrl: data.avatarUrl,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }

    this.items.push(user)

    return user
  }
}

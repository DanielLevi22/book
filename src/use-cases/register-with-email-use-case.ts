import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'

interface RegisterWithEmailCaseRequest {
  name: string
  email: string
  avatarUrl: string
}

interface RegisterWithEmailCaseResponse {
  user: User
}

export class RegisterWithEmailUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
    avatarUrl,
  }: RegisterWithEmailCaseRequest): Promise<RegisterWithEmailCaseResponse> {
    const userWithSameUsername = await this.usersRepository.findByEmail(email)
    let user
    if (!userWithSameUsername) {
      user = await this.usersRepository.create({
        name,
        email,
        avatarUrl,
      })
    } else {
      user = userWithSameUsername
    }

    return {
      user,
    }
  }
}

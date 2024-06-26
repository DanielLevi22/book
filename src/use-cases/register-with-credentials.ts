import { UsersRepository } from '@/repositories/users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'

interface RegisterWithCredentialsCaseRequest {
  name: string
  username: string
  password: string
}

interface RegisterWithCredentialsCaseResponse {
  user: User
}

export class RegisterWithCredentialsUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    username,
    password,
  }: RegisterWithCredentialsCaseRequest): Promise<RegisterWithCredentialsCaseResponse> {
    const passwordHash = await hash(password, 6)
    const userWithSameUsername =
      await this.usersRepository.findByUsername(username)

    if (userWithSameUsername) {
      throw new UserAlreadyExistsError()
    }
    const user = await this.usersRepository.create({
      name,
      username,
      passwordHash,
    })

    return {
      user,
    }
  }
}

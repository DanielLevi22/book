import { UsersRepository } from '@/repositories/users-repository'
import { InvalidCrendentialsError } from './errors/invalid-credentials-error'
import { compare } from 'bcryptjs'
import { User } from '@prisma/client'
interface AuthenticationWithCredentialsRequest {
  username: string
  password: string
}
interface AuthenticationWithCredentialsResponse {
  user: User
}

export class AuthenticationWithCredentialsUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    username,
    password,
  }: AuthenticationWithCredentialsRequest): Promise<AuthenticationWithCredentialsResponse> {
    const user = await this.userRepository.findByUsername(username)

    if (!user || !user.passwordHash) {
      throw new InvalidCrendentialsError()
    }

    const doesPasswordMatches = await compare(password, user.passwordHash)

    if (!doesPasswordMatches) {
      throw new InvalidCrendentialsError()
    }

    return { user }
  }
}

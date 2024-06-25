import { UsersRepository } from '@/repositories/users-repository'
import { InvalidCrendentialsError } from './errors/invalid-credentials-error'
import { compare } from 'bcryptjs'
import { User } from '@prisma/client'
import { AuthenticationMethodConflictError } from './errors/authentication-method-conflict-error'
interface AuthenticationUseCaseRequest {
  email: string
  password: string
}
interface AuthenticationUseCaseResponse {
  user: User
}

export class AuthenticationUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({ email, password }: AuthenticationUseCaseRequest) {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCrendentialsError()
    }
    if (!user.passwordHash) {
      throw new AuthenticationMethodConflictError()
    }
    const doesPasswordMatches = await compare(password, user.passwordHash)

    if (!doesPasswordMatches) {
      throw new InvalidCrendentialsError()
    }

    return { user }
  }
}

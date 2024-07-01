import { UsersRepository } from '@/repositories/users-repository'
import { InvalidCrendentialsError } from './errors/invalid-credentials-error'

import { User } from '@prisma/client'
interface AuthenticationWithGoogleRequest {
  email: string
}
interface AuthenticationWithGoogleResponse {
  user: User
}

export class AuthenticationWithGoogleUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    email,
  }: AuthenticationWithGoogleRequest): Promise<AuthenticationWithGoogleResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCrendentialsError()
    }

    return { user }
  }
}

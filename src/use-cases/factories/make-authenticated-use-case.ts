import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticationWithCredentialsUseCase } from '../authentication-with-credentials'

export function makeAuthenticationUseCaseWithCredentials() {
  const UserRepository = new PrismaUsersRepository()
  const authenticatedUseCase = new AuthenticationWithCredentialsUseCase(
    UserRepository,
  )
  return authenticatedUseCase
}

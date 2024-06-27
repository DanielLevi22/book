import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterWithCredentialsUseCase } from '../register-with-credentials'

export function makeRegisterUseCaseWithCredentials() {
  const prismaUserRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterWithCredentialsUseCase(
    prismaUserRepository,
  )
  return registerUseCase
}

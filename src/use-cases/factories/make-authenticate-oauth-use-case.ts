import { PrismaOauthRepository } from '@/repositories/prisma/prisma-oauth-reposytory'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticationWithOauthUseCase } from '../authentication-with-Oauth'

export function makeAuthenticateOauthUseCase() {
  const oauthRepository = new PrismaOauthRepository()
  const prismaUsersRepository = new PrismaUsersRepository()
  const authenticationWithOauthUseCase = new AuthenticationWithOauthUseCase(
    prismaUsersRepository,
    oauthRepository,
  )
  return authenticationWithOauthUseCase
}

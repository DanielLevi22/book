import { Account } from '@prisma/client'
import { OauthRepository, ProviderProps } from '../oauth-repository'
import { prisma } from '@/libs/db'

export class PrismaOauthRepository implements OauthRepository {
  async create(session: Account): Promise<Account> {
    return await prisma.account.create({
      data: session,
    })
  }

  async findUnique(data: ProviderProps): Promise<Account | null> {
    return await prisma.account.findUnique({
      where: {
        provider_userId: {
          provider: data.provider,
          userId: data.userId,
        },
      },
    })
  }
}

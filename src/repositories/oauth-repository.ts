import { Account, Prisma } from '@prisma/client'

export interface ProviderProps {
  provider: 'GOOGLE' | 'FACEBOOK'
  userId: string
}
export interface OauthRepository {
  create(session: Prisma.AccountUncheckedCreateInput): Promise<Account>
  findUnique(data: ProviderProps): Promise<Account | null>
}

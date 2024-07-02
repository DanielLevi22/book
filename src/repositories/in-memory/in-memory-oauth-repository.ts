import { Account } from '@prisma/client'
import { OauthRepository, ProviderProps } from '../oauth-repository'

export class InMemoryOauthRepository implements OauthRepository {
  private accounts: Account[] = []

  async create(session: Account): Promise<Account> {
    this.accounts.push(session)
    return session
  }

  async findUnique(data: ProviderProps): Promise<Account | null> {
    const foundAccount = this.accounts.find((account) => {
      return (
        account.provider === data.provider && account.userId === data.userId
      )
    })

    return foundAccount || null
  }
}

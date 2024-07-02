import { UsersRepository } from '@/repositories/users-repository'

import { User } from '@prisma/client'
import { OauthRepository } from '@/repositories/oauth-repository'
interface AuthenticationWithOauthRequest {
  provider: 'GOOGLE' | 'FACEBOOK'
  providerId: string
  email: string
  avatarUrl: string
  name: string
}
interface AuthenticationWithOauthResponse {
  user: User
}

export class AuthenticationWithOauthUseCase {
  constructor(
    private userRepository: UsersRepository,
    private oauthRepository: OauthRepository,
  ) {}

  async execute({
    email,
    avatarUrl,
    name,
    provider,
    providerId,
  }: AuthenticationWithOauthRequest): Promise<AuthenticationWithOauthResponse> {
    let user = await this.userRepository.findByEmail(email)

    if (!user) {
      user = await this.userRepository.create({
        email,
        name,
        avatarUrl,
      })
    }
    const account = await this.oauthRepository.findUnique({
      provider,
      userId: user.id,
    })

    if (!account) {
      await this.oauthRepository.create({
        provider,
        userId: user.id,
        providerAccountId: providerId,
      })
    }

    return { user }
  }
}

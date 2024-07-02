import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthenticationWithOauthUseCase } from './authentication-with-Oauth'
import { InMemoryOauthRepository } from '@/repositories/in-memory/in-memory-Oauth-repository'

let oauthRepository: InMemoryOauthRepository
let userRepository: InMemoryUsersRepository
let sut: AuthenticationWithOauthUseCase

describe('Authentication with google use case', async () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    oauthRepository = new InMemoryOauthRepository()
    sut = new AuthenticationWithOauthUseCase(userRepository, oauthRepository)
  })

  it('should be able to authenticate a user with Google', async () => {
    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      provider: 'GOOGLE',
      providerId: '123456789',
      avatarUrl: 'https://example.com/avatar.png',
      name: 'John Doe',
    })

    const session = await oauthRepository.findUnique({
      provider: 'GOOGLE',
      userId: user.id,
    })
    expect(session?.provider).toEqual('GOOGLE')
  })
  it('shold not be able to authenticate a user with Facebook', async () => {
    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      provider: 'FACEBOOK',
      providerId: '123456789',
      avatarUrl: 'https://example.com/avatar.png',
      name: 'John Doe',
    })
    const session = await oauthRepository.findUnique({
      provider: 'FACEBOOK',
      userId: user.id,
    })
    expect(session?.provider).toEqual('FACEBOOK')
  })
})

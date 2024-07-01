import { InvalidCrendentialsError } from './errors/invalid-credentials-error'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthenticationWithGoogleUseCase } from './authentication-with-google'
import { RegisterWithEmailUseCase } from './register-with-email-use-case'

let registerWithEmailUseCase: RegisterWithEmailUseCase
let userRepository: InMemoryUsersRepository
let sut: AuthenticationWithGoogleUseCase

describe('Authentication with google use case', async () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    registerWithEmailUseCase = new RegisterWithEmailUseCase(userRepository)
    sut = new AuthenticationWithGoogleUseCase(userRepository)
  })

  it('should be able to authenticate a user with valid credentials', async () => {
    await registerWithEmailUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      avatarUrl: 'https://example.com/avatar.png',
    })

    const { user } = await sut.execute({
      email: 'johndoe@example.com',
    })

    expect(user.id).toEqual(expect.any(String))
    expect(user.email).toBe('johndoe@example.com')
  })
  it('shold not be able to authenticate a user with wrong email', async () => {
    await registerWithEmailUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      avatarUrl: 'https://example.com/avatar.png',
    })

    await expect(async () => {
      await sut.execute({
        email: 'emailnotfound@example.com',
      })
    }).rejects.toBeInstanceOf(InvalidCrendentialsError)
  })
})

import { hash } from 'bcryptjs'
import { AuthenticationWithCredentialsUseCase } from './authentication-with-credentials'
import { InvalidCrendentialsError } from './errors/invalid-credentials-error'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

let userRepository: InMemoryUsersRepository
let sut: AuthenticationWithCredentialsUseCase

describe('Authentication with credentials use case', async () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    sut = new AuthenticationWithCredentialsUseCase(userRepository)
  })

  it('should be able to authenticate a user with valid credentials', async () => {
    await userRepository.create({
      name: 'John Doe',
      username: 'johndoe',
      passwordHash: await hash('password123', 6),
    })

    const { user } = await sut.execute({
      username: 'johndoe',
      password: 'password123',
    })

    expect(user.id).toEqual(expect.any(String))
  })
  it('shold not be able to authenticate a user with wrong username', async () => {
    await userRepository.create({
      name: 'John Doe',
      username: 'johndoe',
      passwordHash: await hash('password123', 6),
    })

    expect(async () => {
      await sut.execute({
        username: 'usernamenotfound',
        password: 'password123',
      })
    }).rejects.toBeInstanceOf(InvalidCrendentialsError)
  })
  it('shot not be able to authenticate a user with wrong password', async () => {
    await userRepository.create({
      id: 'user-id',
      name: 'John Doe',
      username: 'johndoe',
      passwordHash: await hash('password123', 6),
      email: 'johndoe@example.com',
      avatarUrl: 'https://example.com/avatar.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    expect(async () => {
      await sut.execute({
        username: 'johndoe@example.com',
        password: '123486',
      })
    }).rejects.toBeInstanceOf(InvalidCrendentialsError)
  })
})

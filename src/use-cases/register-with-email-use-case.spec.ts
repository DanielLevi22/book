import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { RegisterWithEmailUseCase } from './register-with-email-use-case'

let usersRepository: InMemoryUsersRepository
let sut: RegisterWithEmailUseCase
describe('Register use case', async () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterWithEmailUseCase(usersRepository)
  })

  it('should register a new user with email', async () => {
    const user = {
      name: 'John Doe',
      email: 'john@doe.com',
      avatarUrl: 'https://example.com/avatar.png',
    }

    // Act

    const result = await sut.execute(user)
    // Assert

    expect(usersRepository.items).toHaveLength(1)
    expect(result.user.email).toBe(user.email)
  })

  it('should return a user if user already exists', async () => {
    const user = {
      name: 'John Doe',
      email: 'john@doe.com',
      avatarUrl: 'https://example.com/avatar.png',
    }

    // Act

    const result = await sut.execute(user)
    await sut.execute(user)

    // Assert

    expect(usersRepository.items).toHaveLength(1)
    expect(result.user.email).toBe(user.email)
  })
})

import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { RegisterWithCredentialsUseCase } from './register-with-credentials'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

describe('Register use case', async () => {
  it('should register a new user', async () => {
    // Arrange
    const user = {
      name: 'John Doe',
      username: 'john',
      password: 'password123',
    }

    // Act
    const usersRepository = new InMemoryUsersRepository()
    const sut = new RegisterWithCredentialsUseCase(usersRepository)
    const result = await sut.execute(user)
    // Assert

    expect(usersRepository.items).toHaveLength(1)
    expect(result.user.name).toBe(user.name)
  })

  it('should throw an error if the user already exists', async () => {
    // Arrange
    const user = {
      name: 'John Doe',
      username: 'john',
      password: 'password123',
    }

    // Act
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterWithCredentialsUseCase(usersRepository)
    await registerUseCase.execute(user)

    expect(async () => {
      await registerUseCase.execute(user)
    }).rejects.toBeInstanceOf(UserAlreadyExistsError)
    // Assert
  })
})

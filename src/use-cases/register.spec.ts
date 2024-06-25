import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { RegisterUseCase } from './register'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

describe('Register use case', async () => {
  it('should register a new user', async () => {
    // Arrange
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    }

    // Act
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)
    const result = await registerUseCase.execute(user)
    // Assert

    expect(usersRepository.items).toHaveLength(1)
    expect(result.user.email).toBe(user.email)
  })

  it('should throw an error if the user already exists', async () => {
    // Arrange
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    }

    // Act
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)
    await registerUseCase.execute(user)

    expect(async () => {
      await registerUseCase.execute(user)
    }).rejects.toBeInstanceOf(UserAlreadyExistsError)
    // Assert
  })
})

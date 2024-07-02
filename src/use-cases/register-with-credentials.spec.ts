import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { RegisterWithCredentialsUseCase } from './register-with-credentials'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

let usersRepository: InMemoryUsersRepository
let sut: RegisterWithCredentialsUseCase
describe('Register use case', async () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterWithCredentialsUseCase(usersRepository)
  })

  it('should register a new user', async () => {
    const user = {
      name: 'John Doe',
      username: 'john',
      password: 'password123',
    }

    const result = await sut.execute(user)

    expect(usersRepository.items).toHaveLength(1)
    expect(result.user.name).toBe(user.name)
  })

  it('should throw an error if the user already exists', async () => {
    const user = {
      name: 'John Doe',
      username: 'john',
      password: 'password123',
    }

    await sut.execute(user)

    expect(async () => {
      await sut.execute(user)
    }).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})

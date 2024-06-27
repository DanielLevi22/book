import { hash } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { GetUserProfileUseCase } from './get-user-profile'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

let userRepository: InMemoryUsersRepository
let sut: GetUserProfileUseCase

describe('Get use profile use case', async () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    sut = new GetUserProfileUseCase(userRepository)
  })

  it('should be able to get profile', async () => {
    const userId = await userRepository.create({
      name: 'John Doe',
      username: 'johndoe',
      passwordHash: await hash('password123', 6),
    })

    const { user } = await sut.execute({
      userId: userId.id,
    })

    expect(user.name).toEqual('John Doe')
  })
  it('shold not be able to get  a user profile with wrong user id', async () => {
    await userRepository.create({
      name: 'John Doe',
      username: 'johndoe',
      passwordHash: await hash('password123', 6),
    })

    expect(async () => {
      await sut.execute({
        userId: 'user-id-not-found',
      })
    }).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

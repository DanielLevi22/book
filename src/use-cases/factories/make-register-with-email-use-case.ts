import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { RegisterWithEmailUseCase } from '../register-with-email-use-case'

export function makeRegisterWithEmailUseCase() {
  const usersRepository = new InMemoryUsersRepository()
  const registerWithEmailUseCase = new RegisterWithEmailUseCase(usersRepository)

  return registerWithEmailUseCase
}

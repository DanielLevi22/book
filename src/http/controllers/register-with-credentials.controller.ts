import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { RegisterWithCredentialsUseCase } from '@/use-cases/register-with-credentials'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
export async function registerWithCredentialsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string().min(3),
    username: z.string().min(3),
    password: z.string().min(6),
  })

  const { name, username, password } = registerBodySchema.parse(request.body)

  try {
    const prismaUserRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterWithCredentialsUseCase(
      prismaUserRepository,
    )
    await registerUseCase.execute({ name, username, password })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    throw error
  }

  return reply.status(201).send()
}

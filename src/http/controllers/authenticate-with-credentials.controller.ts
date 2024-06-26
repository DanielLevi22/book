import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticationWithCredentialsUseCase } from '@/use-cases/authentication-with-credentials'
import { InvalidCrendentialsError } from '@/use-cases/errors/invalid-credentials-error'

export async function authenticateWithCredentialsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
  })

  const { username, password } = registerBodySchema.parse(request.body)

  try {
    const UserRepository = new PrismaUsersRepository()
    const registerUseCase = new AuthenticationWithCredentialsUseCase(
      UserRepository,
    )
    await registerUseCase.execute({ username, password })
  } catch (error) {
    if (error instanceof InvalidCrendentialsError) {
      return reply.status(409).send({ message: error.message })
    }

    throw error
  }

  return reply.status(200).send()
}

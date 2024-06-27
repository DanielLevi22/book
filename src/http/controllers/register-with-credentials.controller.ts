import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { makeRegisterUseCaseWithCredentials } from '@/use-cases/factories/make-register-use-case'
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
    const registerUseCase = makeRegisterUseCaseWithCredentials()
    await registerUseCase.execute({ name, username, password })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    throw error
  }

  return reply.status(201).send()
}
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { InvalidCrendentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { makeAuthenticationUseCaseWithCredentials } from '@/use-cases/factories/make-authenticated-use-case'

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
    const authenticatedUseCase = makeAuthenticationUseCaseWithCredentials()
    const { user } = await authenticatedUseCase.execute({ username, password })

    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id,
        },
      },
    )
    return reply.status(200).send({
      token,
    })
  } catch (error) {
    if (error instanceof InvalidCrendentialsError) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }
}

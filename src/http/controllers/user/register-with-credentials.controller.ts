import { z } from 'zod'
import { FastifyInstance } from 'fastify'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { makeRegisterUseCaseWithCredentials } from '@/use-cases/factories/make-register-use-case'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function registerWithCredentialsController(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users',
    {
      schema: {
        tags: ['User'],
        summary: 'Register a new user',
        body: z.object({
          name: z.string().min(3),
          username: z.string().min(3),
          password: z.string().min(6),
        }),
        response: {
          201: z.object({}),
          409: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, username, password } = request.body

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
    },
  )
}

import { z } from 'zod'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { InvalidCrendentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { makeAuthenticationUseCaseWithCredentials } from '@/use-cases/factories/make-authenticated-use-case'

export async function authenticateWithCredentialsController(
  app: FastifyInstance,
) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/sessions/credentials',
    {
      schema: {
        tags: ['Auth'],
        summary: 'Authenticate with e-mail & password',
        body: z.object({
          username: z.string(),
          password: z.string(),
        }),
        response: {
          201: z.object({
            token: z.string(),
          }),
          400: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { username, password } = request.body
      try {
        const authenticatedUseCase = makeAuthenticationUseCaseWithCredentials()
        const { user } = await authenticatedUseCase.execute({
          username,
          password,
        })
        const token = await reply.jwtSign(
          {},
          {
            sign: {
              sub: user.id,
            },
          },
        )
        const refreshToken = await reply.jwtSign(
          {},
          {
            sign: {
              sub: user.id,
              expiresIn: '7d',
            },
          },
        )
        return reply
          .setCookie('refreshToken', refreshToken, {
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: true,
          })
          .status(200)
          .send({
            token,
          })
      } catch (error) {
        if (error instanceof InvalidCrendentialsError) {
          return reply.status(400).send({ message: error.message })
        }
        throw error
      }
    },
  )
}

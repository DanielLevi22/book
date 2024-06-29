import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function refreshController(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().patch(
    '/sessions/refresh',
    {
      schema: {
        tags: ['Auth'],
        summary: 'Refresh the token',
        response: {
          200: z.object({
            token: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      await request.jwtVerify({
        onlyCookie: true,
      })

      const token = await reply.jwtSign(
        {},
        {
          sign: {
            sub: request.user.sub,
          },
        },
      )
      const refreshToken = await reply.jwtSign(
        {},
        {
          sign: {
            sub: request.user.sub,
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
    },
  )
}

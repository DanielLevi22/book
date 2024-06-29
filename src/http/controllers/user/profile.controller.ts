import { auth } from '@/http/middlewares/verify-jwt'
import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use-case'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function profileController(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/me',
      {
        schema: {
          tags: ['Profile'],
          summary: 'Get the user profile',
          response: {
            200: z.object({
              user: z.object({
                id: z.string(),
                name: z.string(),
                username: z.string().nullable(),
                email: z.string().nullable(),
                avatarUrl: z.string().nullable(),
                createdAt: z.string(),
                updatedAt: z.string(),
              }),
            }),
          },
        },
      },
      async (request, reply) => {
        const getuserProfile = makeGetUserProfileUseCase()
        const { user } = await getuserProfile.execute({
          userId: request.user.sub,
        })

        return reply.status(200).send({
          user: {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            avatarUrl: user.avatarUrl,
            createdAt: user.createdAt.toDateString(),
            updatedAt: user.updatedAt.toDateString(),
          },
        })
      },
    )
}

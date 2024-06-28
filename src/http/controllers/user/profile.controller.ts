import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function profileController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getuserProfile = makeGetUserProfileUseCase()
  const { user } = await getuserProfile.execute({
    userId: request.user.sub,
  })
  return reply.status(200).send({
    user: {
      ...user,
      passwordHash: undefined,
    },
  })
}

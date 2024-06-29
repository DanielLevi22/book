import { FastifyInstance } from 'fastify'
import { fastifyPlugin } from 'fastify-plugin'

export const auth = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch (err) {
      return reply.status(401).send({ message: 'Unauthorized.' })
    }
  })
})

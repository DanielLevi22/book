import { FastifyInstance } from 'fastify'
import { authenticateWithCredentialsController } from './authenticate-with-credentials.controller'
import { refreshController } from './refresh-controller'

export async function authRoutes(app: FastifyInstance) {
  app.post('/sessions/credentials', authenticateWithCredentialsController)
  app.patch('/sessions/refresh', refreshController)
}

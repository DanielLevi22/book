import { FastifyInstance } from 'fastify'
import { authenticateWithCredentialsController } from './authenticate-with-credentials.controller'

export async function authRoutes(app: FastifyInstance) {
  app.post('/sessions/credentials', authenticateWithCredentialsController)
}

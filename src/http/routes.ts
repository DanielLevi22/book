import { FastifyInstance } from 'fastify'
import { registerController } from './controllers/register.controller'
import { authenticateWithCredentialsController } from './controllers/authenticate-with-credentials.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerController)
  app.post('/sessions/credentials', authenticateWithCredentialsController)
}

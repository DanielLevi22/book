import { FastifyInstance } from 'fastify'
import { registerWithCredentialsController } from './controllers/register-with-credentials.controller'
import { authenticateWithCredentialsController } from './controllers/authenticate-with-credentials.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerWithCredentialsController)
  app.post('/sessions/credentials', authenticateWithCredentialsController)
}

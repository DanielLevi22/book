import { FastifyInstance } from 'fastify'
import { registerWithCredentialsController } from './register-with-credentials.controller'
import { profileController } from './profile.controller'
import { verifyJwt } from '@/http/middlewares/verify-jwt'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', registerWithCredentialsController)

  app.get('/me', { onRequest: [verifyJwt] }, profileController)
}

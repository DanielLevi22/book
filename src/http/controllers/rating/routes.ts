import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'

export async function ratingRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)
}

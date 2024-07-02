import { z } from 'zod'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { env } from '@/env'
import { makeFetchPostUseCase } from '@/use-cases/factories/make-fetch-post-use-case'
import { makeRegisterWithEmailUseCase } from '@/use-cases/factories/make-register-with-email-use-case'

export async function authenticateWithGoogleController(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/sessions/google',
    {
      schema: {
        tags: ['Auth'],
        summary: 'Authenticate with Google',
        body: z.object({
          code: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { code } = request.body

      const googleTokenURL = 'https://oauth2.googleapis.com/token'
      const requestBody = new URLSearchParams()
      requestBody.append('code', code)
      requestBody.append('client_id', env.GOOGLE_CLIENT_ID)
      requestBody.append('client_secret', env.GOOGLE_CLIENT_SECRET)
      requestBody.append('redirect_uri', env.GOOGLE_REDIRECT_URI)
      requestBody.append('grant_type', 'authorization_code')

      try {
        const fetchUseCase = makeFetchPostUseCase()
        const { data: tokenData } = await fetchUseCase.execute({
          url: googleTokenURL,
          body: requestBody.toString(),
        })

        const { id_token: idToken } = z
          .object({
            access_token: z.string(),
            expires_in: z.number(),
            scope: z.string(),
            token_type: z.string(),
            id_token: z.string(),
          })
          .parse(tokenData)

        if (!idToken) {
          return reply.status(500).send('Failed to obtain Google access token')
        }

        // Decodificando o token JWT usando fastify-jwt
        const decodedToken = app.jwt.decode<{
          iss: string
          azp: string
          aud: string
          sub: string
          email: string
          email_verified: boolean
          at_hash: string
          iat: number
          exp: number
          nonce: string
          name: string
          picture: string
          given_name: string
          family_name: string
        }>(idToken)

        if (!decodedToken?.email) {
          return reply.status(500).send('Failed to obtain Google access token')
        }
        console.log(decodedToken)
        const registerWithEmail = makeRegisterWithEmailUseCase()
        const { user } = await registerWithEmail.execute({
          name: decodedToken.name,
          email: decodedToken.email,
          avatarUrl: decodedToken.picture,
        })
      } catch (error) {
        console.error('Error fetching Google access token:', error)
        reply.status(500).send('Failed to obtain Google access token')
      }
    },
  )
}

import { z } from 'zod'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { env } from '@/env'

export async function authenticateWithGoogleController(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/sessions/google',
    {
      schema: {
        tags: ['Auth'],
        summary: 'Authenticate with e-mail & password',
        body: z.object({
          code: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { code } = request.body

      const requestBody = new URLSearchParams()
      requestBody.append('code', code)
      requestBody.append('client_id', env.GOOGLE_CLIENT_ID)
      requestBody.append('client_secret', env.GOOGLE_CLIENT_SECRET)
      requestBody.append('redirect_uri', env.GOOGLE_REDIRECT_URI)
      requestBody.append('grant_type', 'authorization_code')

      const googleTokenURL = 'https://oauth2.googleapis.com/token'

      try {
        const response = await fetch(googleTokenURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: requestBody.toString(), // Convertendo para string URL-encoded
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(
            `Failed to obtain Google access token: ${errorData.error_description}`,
          )
        }

        const tokenData = await response.json()
        reply.status(200).send(tokenData)
      } catch (error) {
        console.error('Error fetching Google access token:', error)
        reply.status(500).send('Failed to obtain Google access token')
      }
    },
  )
}

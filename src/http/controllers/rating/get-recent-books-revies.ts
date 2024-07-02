import { makeFetchRecentReviewsUseCase } from '@/repositories/make-fetch-recent-reviews-use-case'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function getRecentReviewsController(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/recent-reviews',
    {
      schema: {
        tags: ['Rating'],
        summary: 'Get recent reviews',
        response: {
          200: z.object({
            recentReviews: z.array(
              z.object({
                id: z.string(),
                rating: z.number(),
                createdAt: z.date(),
                user: z.object({
                  name: z.string(),
                  avatarUrl: z.string().nullable(),
                }),
                book: z.object({
                  coverUrl: z.string(),
                  name: z.string(),
                  description: z.string(),
                  author: z.object({
                    name: z.string(),
                  }),
                }),
              }),
            ),
          }),
        },
      },
    },
    async (request, reply) => {
      const fetchRecentReviews = makeFetchRecentReviewsUseCase()
      const { recentReviews } = await fetchRecentReviews.execute()

      return reply.status(200).send({ recentReviews })
    },
  )
}

import { makeFetchRecentReviewsUseCase } from '@/repositories/make-fetch-recent-reviews-use-case'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function getRecentReviewsController(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/recent-reviews',
    {
      schema: {
        tags: ['Available Reviews'],
        summary: 'Get recent reviews',
        // response: {
        //   200: z.object({
        //     user: z.object({
        //       id: z.string(),
        //       name: z.string(),
        //       username: z.string().nullable(),
        //       email: z.string().nullable(),
        //       avatarUrl: z.string().nullable(),
        //       createdAt: z.string(),
        //       updatedAt: z.string(),
        //     }),
        //   }),
        // },
      },
    },
    async (request, reply) => {
      const fetchRecentReviews = makeFetchRecentReviewsUseCase()
      const { recentReviews } = await fetchRecentReviews.execute()

      return reply.status(200).send({ recentReviews })
    },
  )
}

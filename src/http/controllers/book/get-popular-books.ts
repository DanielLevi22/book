import { makeFetchPopularBooksUseCase } from '@/use-cases/factories/make-fetch-popular-books-use-case'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function getPopularBooksController(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/popular-books',
    {
      schema: {
        tags: ['Books'],
        summary: 'Get recent reviews',
        response: {
          200: z.object({
            topRatedBooks: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                coverUrl: z.string(),
                description: z.string(),
                authorId: z.string(),
                averageRating: z.number(),
              }),
            ),
          }),
        },
      },
    },
    async (request, reply) => {
      const fetchPopularBooksUseCase = makeFetchPopularBooksUseCase()
      const { topRatedBooks } = await fetchPopularBooksUseCase.execute()

      return reply.status(200).send({ topRatedBooks })
    },
  )
}

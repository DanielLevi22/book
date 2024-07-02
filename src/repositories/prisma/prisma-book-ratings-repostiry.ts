import { Prisma } from '@prisma/client'
import { BookRatingsRepository } from '../book-ratings-repository'
import { prisma } from '@/libs/db'

export class PrismaBookRatingsRepository implements BookRatingsRepository {
  async findRecentReviews() {
    const reviews = await prisma.bookRating.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        rating: true,
        createdAt: true,
        user: {
          select: {
            name: true,
            avatarUrl: true,
          },
        },
        book: {
          select: {
            coverUrl: true,
            name: true,
            description: true,
            author: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    })

    return reviews
  }

  async findAll() {
    return prisma.bookRating.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  create(data: Prisma.BookRatingUncheckedCreateInput) {
    return prisma.bookRating.create({
      data,
    })
  }
}

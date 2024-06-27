import { Book } from '@prisma/client'
import { BooksRepository } from '@/repositories/books-repository'
import { AuthorRepository } from '@/repositories/author-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
interface CreateBookRequest {
  id: string
  name: string
  coverUrl: string
  description: string
  slug: string
  totalPages: number
  authorId: string
}
interface CreateBookResponse {
  book: Book
}

export class CreateBookUseCase {
  constructor(
    private booksRepository: BooksRepository,
    private authorRepository: AuthorRepository,
  ) {}

  async execute({
    id,
    name,
    coverUrl,
    description,
    slug,
    totalPages,
    authorId,
  }: CreateBookRequest): Promise<CreateBookResponse> {
    const author = await this.authorRepository.findById(authorId)
    if (!author) {
      throw new ResourceNotFoundError()
    }
    const book = await this.booksRepository.create({
      id,
      name,
      coverUrl,
      description,
      slug,
      totalPages,
      authorId: author.id,
    })

    return { book }
  }
}

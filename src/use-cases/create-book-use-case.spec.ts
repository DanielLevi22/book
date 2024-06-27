import { InMemoryBookRepository } from '@/repositories/in-memory/in-memory-book-repository'
import { CreateBookUseCase } from './create-book-use-case'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { InMemoryAuthorRepository } from '@/repositories/in-memory/in-memory-author-repository'

let bookRepository: InMemoryBookRepository
let authorRepository: InMemoryAuthorRepository
let sut: CreateBookUseCase
describe('Book use case', async () => {
  beforeEach(() => {
    authorRepository = new InMemoryAuthorRepository()
    bookRepository = new InMemoryBookRepository()
    sut = new CreateBookUseCase(bookRepository, authorRepository)
  })

  it('should be a to  create a book', async () => {
    authorRepository.create({
      id: 'author-id',
      name: 'John Doe',
    })
    bookRepository.items.push({
      id: 'book-id',
      name: 'The Great Book',
      coverUrl: 'https://example.com/cover.png',
      description: 'A great book',
      slug: 'the-great-book',
      totalPages: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: 'author-id',
    })

    const { book } = await sut.execute({
      id: 'book-id',
      name: 'The Great Book',
      coverUrl: 'https://example.com/cover.png',
      description: 'A great book',
      slug: 'the-great-book',
      totalPages: 100,
      authorId: 'author-id',
    })

    expect(book.id).toEqual(expect.any(String))
    expect(book.name).toEqual('The Great Book')
    expect(book.totalPages).toEqual(100)
  })
  it('should not be a to  create book if auhtor already exists', async () => {
    authorRepository.items.push({
      id: 'author-id',
      name: 'John Doe',
      createdAt: new Date(),
      updatedAt: new Date(),
      biography: 'A great author',
    })
    bookRepository.items.push({
      id: 'book-id',
      name: 'The Great Book',
      coverUrl: 'https://example.com/cover.png',
      description: 'A great book',
      slug: 'the-great-book',
      totalPages: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: 'author-id',
    })

    expect(async () => {
      await sut.execute({
        id: 'book-id',
        name: 'The Great Book',
        coverUrl: 'https://example.com/cover.png',
        description: 'A great book',
        slug: 'the-great-book',
        totalPages: 100,
        authorId: 'author-not-exists',
      })
    }).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

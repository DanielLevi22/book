import { InMemoryFetchRepository } from '@/repositories/in-memory/in-memory-fetch-repository'
import { FetchPostUseCase } from '@/use-cases/fetch-post-use-case'

describe('Fetch post use case', () => {
  let fetchRepository: InMemoryFetchRepository
  let fetchPostUseCase: FetchPostUseCase

  beforeEach(() => {
    fetchRepository = new InMemoryFetchRepository()
    fetchPostUseCase = new FetchPostUseCase(fetchRepository)
  })

  it('should be able to fetch post', async () => {
    const url = 'https://api.example.com/posts/1'
    const body = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    expect(async () => {
      await fetchPostUseCase.execute({ url, body })
    }).toBeTruthy()
  })
})

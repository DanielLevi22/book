import { FetchPostUseCase } from './fetch-post-use-case'

import { InMemoryFetchRepository } from '@/repositories/in-memory/in-memory-fetch-repository'

let fetchHttpRepository: InMemoryFetchRepository
let sut: FetchPostUseCase

describe('Fetch post use case', async () => {
  beforeEach(() => {
    fetchHttpRepository = new InMemoryFetchRepository()
    sut = new FetchPostUseCase(fetchHttpRepository)
  })

  it('should be able to fetch post', async () => {
    const reponse = await sut.execute({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    })
    console.log(reponse)
    expect(reponse).toBeTruthy()
  })
})

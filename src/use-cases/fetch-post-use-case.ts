import { FetchHttpRepository } from '@/repositories/fetch-http-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface FetchPostUseCaseRequest {
  url: string
  body: unknown
}

interface FetchPostUseCaseResponse {
  data: unknown
}

export class FetchPostUseCase {
  constructor(private fetchHttpRepository: FetchHttpRepository) {}

  async execute({
    url,
    body,
  }: FetchPostUseCaseRequest): Promise<FetchPostUseCaseResponse> {
    try {
      const responseData = await this.fetchHttpRepository.post(url, body)

      return { data: responseData }
    } catch (error) {
      throw new ResourceNotFoundError()
    }
  }
}

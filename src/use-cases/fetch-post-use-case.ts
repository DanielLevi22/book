// src/use-cases/fetch-post-use-case.ts

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
      const response = await this.fetchHttpRepository.post(url, body)

      if (!response.ok) {
        throw new ResourceNotFoundError()
      }

      const data = await response.json()
      return { data }
    } catch (error) {
      throw new ResourceNotFoundError()
    }
  }
}

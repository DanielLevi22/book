import { FetchRepository } from '@/repositories/fetch/fetch-repository'
import { FetchPostUseCase } from '../fetch-post-use-case'

export function makeFetchPostUseCase() {
  const fetchRepository = new FetchRepository()
  const fetchPostUseCase = new FetchPostUseCase(fetchRepository)
  return fetchPostUseCase
}

import { FetchHttpRepository } from '../fetch-http-repository'

export class InMemoryFetchRepository implements FetchHttpRepository {
  private data: Record<string, unknown>

  constructor() {
    this.data = {}
  }

  async get<T>(url: string): Promise<T> {
    if (this.data[url]) {
      return this.data[url] as T
    } else {
      throw new Error(`Data not found for URL: ${url}`)
    }
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    this.data[url] = body
    return body as T
  }

  async put<T>(url: string, body: unknown): Promise<T> {
    if (this.data[url]) {
      this.data[url] = body
      return body as T
    } else {
      throw new Error(`Data not found for URL: ${url}`)
    }
  }

  async delete<T>(url: string): Promise<T> {
    if (this.data[url]) {
      const deletedData = this.data[url]
      delete this.data[url]
      return deletedData as T
    } else {
      throw new Error(`Data not found for URL: ${url}`)
    }
  }
}

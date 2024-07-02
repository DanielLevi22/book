// src/infrastructure/http/FetchRepository.ts

import { FetchHttpRepository } from '../fetch-http-repository'

export class FetchRepository implements FetchHttpRepository {
  async post<T>(
    url: string,
    body: unknown,
  ): Promise<{ ok: boolean; json: () => Promise<T> }> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body as string,
      })

      return {
        ok: response.ok,
        json: async () => response.json() as Promise<T>,
      }
    } catch (error) {
      console.error('Error creating resource:', error)
      throw new Error('Failed to create resource')
    }
  }

  async put<T>(
    url: string,
    body: unknown,
  ): Promise<{ ok: boolean; json: () => Promise<T> }> {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      return {
        ok: response.ok,
        json: async () => response.json() as Promise<T>,
      }
    } catch (error) {
      console.error('Error updating resource:', error)
      throw new Error('Failed to update resource')
    }
  }

  async delete<T>(
    url: string,
  ): Promise<{ ok: boolean; json: () => Promise<T> }> {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      })

      return {
        ok: response.ok,
        json: async () => response.json() as Promise<T>,
      }
    } catch (error) {
      console.error('Error deleting resource:', error)
      throw new Error('Failed to delete resource')
    }
  }

  async get<T>(url: string): Promise<{ ok: boolean; json: () => Promise<T> }> {
    try {
      const response = await fetch(url)

      return {
        ok: response.ok,
        json: async () => response.json() as Promise<T>,
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      throw new Error('Failed to fetch data')
    }
  }
}

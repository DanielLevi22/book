export interface FetchHttpRepository {
  get<T>(url: string): Promise<{ ok: boolean; json: () => Promise<T> }>
  post<T>(
    url: string,
    body: unknown,
  ): Promise<{ ok: boolean; json: () => Promise<T> }>
  put<T>(
    url: string,
    body: unknown,
  ): Promise<{ ok: boolean; json: () => Promise<T> }>
  delete<T>(url: string): Promise<{ ok: boolean; json: () => Promise<T> }>
}

export interface FetchHttpRepository {
  get<T>(url: string): Promise<T>
  get<T>(url: string): Promise<T>
  post<T>(url: string, body: unknown): Promise<T>
  put<T>(url: string, body: unknown): Promise<T>
  delete<T>(url: string): Promise<T>
}

export class AuthenticationMethodConflictError extends Error {
  constructor() {
    super('Authentication method conflict.')
  }
}

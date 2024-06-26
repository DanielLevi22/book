export class AuthenticationMethodProviderConflictError extends Error {
  constructor() {
    super('Authentication method conflict.')
  }
}

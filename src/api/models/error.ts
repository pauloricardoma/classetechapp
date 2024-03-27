export class Error {
  constructor(
    public code: number,
    public message?: string,
  ) {
    this.code = code
    this.message = message
  }
}
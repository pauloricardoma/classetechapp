import { Error } from "./error";

export class Response<T> {
  constructor(
    public status: number,
    public ok: boolean,
    public data?: T,
    public error?: Error | null,
  ) {
    this.status = status
    this.ok = ok
    this.data = data
    this.error = error
  }
}
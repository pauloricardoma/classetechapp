import { FileDTO } from "./file"

export class UserDTO {
  constructor (
    public id: number,
    public cpf: string,
    public email: string,
    public name: string,
    public images?: FileDTO[] | null,
  ) {
    this.id = id
    this.cpf = cpf
    this.email = email
    this.name = name
    this.images = images || []
  }
}
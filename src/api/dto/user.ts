import { User } from "../models/user";

export class UserDTO {
  cpf: string
  email: string
  name: string

  constructor (
    public user: User,
  ) {
    this.cpf = user.cpf;
    this.email = user.password;
    this.name = user.name;
  }
}
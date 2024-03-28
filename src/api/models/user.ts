export class User {
  constructor (
    public cpf: string,
    public email: string,
    public name: string,
    public password: string,
    public id?: number,
    public images?: string[],
  ) {
    this.cpf = cpf
    this.email = email
    this.name = name
    this.password = password
    this.id = id
    this.images = images
  }
}
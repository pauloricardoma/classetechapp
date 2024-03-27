import { Error } from "@/api/models/error";
import { User } from "@/api/models/user";
import { UserRepository } from "@/api/repositories/UserRepository";

export class Create {
  constructor(
    public body: any,
    public user: typeof User,
    public user_repository: UserRepository
  ) {
    this.body = body
    this.user = user
    this.user_repository = user_repository
  }

  async call() {
    const { cpf, name, email, password } = this.body

    if (!cpf) {
      return new Error(404, "CPF é obrigatório!")
    }

    const user = new this.user(cpf, name, email, password)
    const result = await this.user_repository.create(user)

    if (result) {
      return result
    }

    throw new Error(400, "Erro ao criar usuário!")
  }
}

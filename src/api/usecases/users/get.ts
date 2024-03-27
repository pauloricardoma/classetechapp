import { Error } from "@/api/models/error";
import { UserRepository } from "@/api/repositories/UserRepository";

export class Get {
  constructor(
    public body: any,
    public user_repository: UserRepository
  ) {
    this.body = body
    this.user_repository = user_repository
  }

  async call() {
    const { cpf, password } = this.body

    if (!cpf) {
      return new Error(404, "CPF é obrigatório!")
    }

    if (!password) {
      return new Error(404, "Senha é obrigatório!")
    }

    const result = await this.user_repository.findByCpfAndPassword(cpf, password)
    
    if (result) {
      return result
    }

    throw new Error(400, "Usuário não encontrado!")
  }
}

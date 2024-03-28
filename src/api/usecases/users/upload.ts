import { Error } from "@/api/models/error";
import { File } from "@/api/models/file";
import { UserRepository } from "@/api/repositories/UserRepository";

export class Upload {
  constructor(
    public body: any,
    public file: typeof File,
    public user_repository: UserRepository,
    public userId?: number
  ) {
    this.userId = userId
    this.body = body
    this.file = file
    this.user_repository = user_repository
  }

  async call() {
    const { uri, file_name } = this.body

    if (!this.userId) {
      return new Error(404, "Usuário obrigatório!")
    }

    if (!uri) {
      return new Error(404, "Documento obrigatório!")
    }

    const file = new this.file(this.userId, uri, file_name)
    const result = await this.user_repository.saveImage(file)

    if (result) {
      return result
    }

    throw new Error(400, "Erro ao salvar documento!")
  }
}

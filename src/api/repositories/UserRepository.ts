import { Database } from "../database/db";
import { UserDTO } from "../dto/user";
import { User } from "../models/user";

export class UserRepository {
  constructor(
    private database: Database,
    public user: typeof UserDTO
  ) {
    this.database = database
    this.user = user
  }

  async findByCpfAndPassword(cpf: string, password: string): Promise<UserDTO | null> {
    const query = `
      SELECT cpf, email, name, password FROM users WHERE cpf = ? AND password = ?;
    `

    try {
      const result: any = await this.database.db.execAsync(
        [{
          sql: query,
          args: [cpf, password]
        }],
        this.database.readOnly
      )
      if (result[0].rows.length === 1) {
        return JSON.parse(JSON.stringify(result[0].rows[0])) as UserDTO
      }
      
      return null

    } catch (err) {
      return null

    } finally {
      await this.database.close()
    }
  }

  async create(user: User): Promise<UserDTO | null> {
    const query = `
      INSERT INTO users (cpf, email, name, password) VALUES (?, ?, ?, ?);
    `

    try {
      const result: any = await this.database.db.execAsync(
        [{
          sql: query,
          args: [user.cpf, user.email, user.name, user.password]
        }],
        this.database.readOnly
      )

      if (result[0].rowsAffected === 1) {
        const newUser = new UserDTO(user)
        return newUser
      }
      
      return null

    } catch (err) {
      return null

    } finally {
      await this.database.close()
    }
  }

  async updateById() {

  }
}
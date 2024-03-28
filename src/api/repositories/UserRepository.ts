import { Database } from "../database/db";
import { User } from "../models/user";
import { FileDTO } from "../dto/file";
import { File } from "../models/file";
import { UserDTO } from "../dto/user";

export class UserRepository {
  constructor(
    private database: Database,
    public user: typeof UserDTO
  ) {
    this.database = database
    this.user = user
  }

  async findByCpfAndPassword(cpf: string, password: string): Promise<UserDTO | null> {
    const query1 = `
      SELECT id, cpf, email, name, password
      FROM users
      WHERE cpf = ? AND password = ?;
    `
    const query2 = `
      SELECT uri, file_name
      FROM files
      WHERE user_id = ?;
    `

    try {
      let result: UserDTO | null = null;

      await this.database.db.transactionAsync(async transaction => {
        const result1 = await transaction.executeSqlAsync(query1, [cpf, password])

        if (result1.rows.length === 1) {
          const userDTO = JSON.parse(JSON.stringify(result1.rows[0])) as UserDTO

          if (userDTO.id) {
            const files: FileDTO[] = []
            const result2 = await transaction.executeSqlAsync(query2, [userDTO.id])

            if (result2.rows.length > 0) {
              for (const row of result2.rows) {
                files.push(JSON.parse(JSON.stringify(row)))
              }
            }

            userDTO.images = files
          }

          result = userDTO

        } else {
          result = null
        }
      }, this.database.readOnly);

      return result

    } catch (err) {
      return null

    } finally {
      await this.database.close()
    }
  }

  async create(user: User): Promise<UserDTO | null> {
    const query = `
      INSERT INTO users (cpf, email, name, password) 
      VALUES (?, ?, ?, ?)
      RETURNING id, cpf, email, name, password;
    `

    try {
      const result: any = await this.database.db.execAsync(
        [{
          sql: query,
          args: [user.cpf, user.email, user.name, user.password]
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

  async saveImage(file: File) {
    const query = `
      INSERT INTO files (user_id, uri, file_name) 
      VALUES (?, ?, ?)
      RETURNING uri, file_name;
    `

    try {
      const result: any = await this.database.db.execAsync(
        [{
          sql: query,
          args: [file.userId, file.uri, file.file_name]
        }],
        this.database.readOnly
      )

      if (result[0].rows.length === 1) {
        return JSON.parse(JSON.stringify(result[0].rows[0])) as FileDTO
      }

      return null

    } catch (err) {
      return null

    } finally {
      await this.database.close()
    }
  }
}
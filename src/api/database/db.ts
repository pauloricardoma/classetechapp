import * as SQLite from "expo-sqlite"

export const DATABASE_NAME = "SQLITE_DB"

export interface InitDB {
  initDB: boolean;
}

export class Database {
  db: SQLite.SQLiteDatabase
  readOnly: boolean

  constructor() {
    this.db = SQLite.openDatabase(DATABASE_NAME)
    this.readOnly = false
  }

  async close() {
    await this.db.closeAsync()
  }

  async init() {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        cpf TEXT NOT NULL,
        email TEXT,
        name TEXT,
        password TEXT
      );
    `;

    try {
      await this.db.execAsync(
        [{
          sql: query,
          args: []
        }],
        this.readOnly
      )
      console.log("Table users criada com sucesso!")

    } catch (err) {
      console.log("Erro ao iniciar a transação: ", err)

    } finally {
      await this.close()
    }
  }
}
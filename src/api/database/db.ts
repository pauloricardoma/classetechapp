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
    const query1 = `DROP TABLE IF EXISTS users;`
    const query2 = `DROP TABLE IF EXISTS files;`
    const query3 = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        cpf TEXT NOT NULL UNIQUE,
        email TEXT,
        name TEXT,
        password TEXT
      );
    `;
    const query4 = `
      CREATE TABLE IF NOT EXISTS files (
          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
          user_id INTEGER NOT NULL,
          uri TEXT NOT NULL,
          file_name TEXT,
          FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `;

    try {
      await this.db.transactionAsync(async transaction => {
        const [
          result1,
          result2,
        ] = await Promise.all([
          transaction.executeSqlAsync(query1),
          transaction.executeSqlAsync(query2)
        ])
        const [
          result3,
          result4,
        ] = await Promise.all([
          transaction.executeSqlAsync(query3),
          transaction.executeSqlAsync(query4)
        ])
        console.log("Table users dropada com sucesso: ", result1)
        console.log("Table files dropada com sucesso: ", result2)
        console.log("Table users criada com sucesso: ", result3)
        console.log("Table files criada com sucesso: ", result4)
      }, this.readOnly);

    } catch (err) {
      console.log("Erro ao iniciar a transação: ", err)

    } finally {
      await this.close()
    }
  }
}
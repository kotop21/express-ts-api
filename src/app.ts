import express from 'express';
import router from './routes/database.js';
import { consola } from 'consola';
import { poolDb } from './utils/index.js';

const port: number = 3000

async function main() {
  try {
    const conn = await poolDb.getConnection();
    conn.release();
    consola.success("Підключення до MariaDB успішне!");

    const app = express();
    app.use(express.json());
    app.use('/', router);

    app.listen(port, () => {
      consola.success(`Слухаєм порт: ${port}`)
    })
  } catch (err: any) {
    consola.error("Ошибка в підключенні MariaDB:", err);
    process.exit(1);
  }
}

main();

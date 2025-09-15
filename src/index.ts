import express from "express";
import userRouter from "./routes/users.routes.js";
import { consola } from "consola";
import { poolDb } from "./utils/index.js";
import { app } from "./app.js";

const port: number = 3000;

async function main() {
  const conn = await poolDb.getConnection();
  conn.release();
  consola.success("Підключення до MariaDB успішне!");

  app.listen(port, () => {
    consola.success(`Слухаєм порт: ${port}`);
  });
}

main()
  .then(() => {
    consola.info("Сервер запущено...");
  })
  .catch((err) => {
    consola.error("Ошибка в підключенні MariaDB:", err);
    process.exit(1);
  });

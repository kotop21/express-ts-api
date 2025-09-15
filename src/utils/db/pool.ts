import dotenv from "dotenv";
import mariadb from "mariadb";

dotenv.config();

export const poolDb = mariadb.createPool({
  host: process.env.MYSQL_HOST!,
  user: process.env.MYSQL_USERNAME!,
  password: process.env.MYSQL_PASSWORD!,
  port: Number(process.env.MYSQL_PORT),
  database: "my_database",
  connectionLimit: 5,
});


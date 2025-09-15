import { poolDb } from "../index.js";
import { consola } from 'consola';

export const outputUserDb = async () => {
  let conn;
  try {
    conn = await poolDb.getConnection();
    consola.success("Успішний запрос для вивода всіх користувачів.")
    return { success: true, data: await conn.query('SELECT * FROM users') };
  } catch (err: any) {
    consola.error(new Error(err))
    return { success: false, error: 'Помилка при отриманні користувачів.' };
  } finally {
    if (conn) conn.release();
  }
}
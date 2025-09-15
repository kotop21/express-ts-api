import { poolDb } from "../index.js";
import { consola } from 'consola';

export const newUserDb = async (name: string, password: string) => {
  let conn;
  try {
    conn = await poolDb.getConnection();
    const insert = await conn.query(
      'INSERT INTO users (name, password) VALUES (?, ?)',
      [name, password]
    );
    consola.success(
      `Успішно добавленний користувач: ${name} у якого пароль: ${password} ;)`)
    return {
      success: true, message:
        `Користувача ${name} успішно додано.`
    };
  } catch (err: any) {
    consola.error(new Error(err))
    return { success: false, error: 'Помилка при додаванні користувача.' };
  } finally {
    if (conn) conn.release();
  }
}
import type { Request, Response } from "express";
import { outputUserDb } from "../../utils/index.js";

export const getUsers = async (req: Request, res: Response) => {
  const result = await outputUserDb();
  if (result.success) {
    res.json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

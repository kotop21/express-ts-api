import type { Request, Response } from "express";
import { newUserDb } from "../../utils/index.js";
import type { UserRequest } from "./types.js";

export const createUser = async (req: Request, res: Response) => {
  const { name, password } = req.body as UserRequest;
  if (!name || !password)
    return res.status(400).json({ error: "Ім'я та пароль обов'язкові" });

  const result = await newUserDb(name, password);
  if (result.success) {
    return res.status(201).json({ message: result.message });
  }
  res.status(500).json({ error: result.error });
};


const userRepository = {
  create: async (name: string, password: string) => {
    // sql logic to create a user
  }
}

const userRepository = {
  create: async (name: string, password: string) => {
    // mongodb db logic to create a user
  }
}
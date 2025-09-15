import { Router } from "express";
import { newUserDb, outputUserDb } from '../utils/index.js';
const userRouter: Router = Router();

userRouter.post("/user", async (req, res) => {
  interface UserRequest {
    name: string;
    password: string;
  }
  const { name, password } = req.body as UserRequest;
  if (!name || !password)
    return res.status(400).json({ error: "Ім'я та пароль обов'язкові" });

  const result = await newUserDb(name, password);
  if (result.success) {
    return res.status(201).json({ message: result.message });
  }
  res.status(500).json({ error: result.error });
});

userRouter.get("/users", async (req, res) => {
  const result = await outputUserDb()
  if (result.success) {
    res.json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
});

export default userRouter;

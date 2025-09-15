import { Router } from "express";
import { createUser } from "../controllers/ users/create-user.js";
import { getUsers } from "../controllers/ users/get-users.js";

const userRouter: Router = Router();
userRouter.post("/", createUser);
userRouter.get("/", getUsers);

export default userRouter;

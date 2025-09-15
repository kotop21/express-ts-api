import express from "express";
import userRouter from "./routes/users.routes.js";

export const app = express();
app.use(express.json());
app.use("/users", userRouter);

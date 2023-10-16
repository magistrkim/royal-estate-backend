import express from "express";
import { updateUser } from "../controllers/user/index.js";
import { verifyUser } from "../helpers/index.js";

const userRouter = express.Router();

userRouter.post("/update/:id", verifyUser, updateUser);

export default userRouter;

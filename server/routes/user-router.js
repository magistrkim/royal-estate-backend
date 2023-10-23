import express from "express";
import { updateUser, deleteUser, getUserListings, getUser } from "../controllers/user/index.js";
import { verifyUser } from "../helpers/index.js";

const userRouter = express.Router();

userRouter.post("/update/:id", verifyUser, updateUser);
userRouter.delete("/delete/:id", verifyUser, deleteUser);
userRouter.get("/listings/:id", verifyUser, getUserListings);
userRouter.get("/:id", verifyUser, getUser);

export default userRouter;

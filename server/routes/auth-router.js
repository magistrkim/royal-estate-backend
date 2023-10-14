import express from "express";
import { signin, signup, google } from "../controllers/auth/index.js";

const authRouter = express.Router();

authRouter.post("/signup", signup)
authRouter.post("/signin", signin);
authRouter.post("/google", google);

export default authRouter;
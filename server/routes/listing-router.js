import express from "express";
import { createListing } from "../controllers/listing/index.js";
import { verifyUser } from "../helpers/index.js";

const listingRouter = express.Router();

listingRouter.post("/create", verifyUser, createListing);

export default listingRouter;

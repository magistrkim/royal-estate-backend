import express from "express";
import { createListing, deleteListing } from "../controllers/listing/index.js";
import { verifyUser } from "../helpers/index.js";

const listingRouter = express.Router();

listingRouter.post("/create", verifyUser, createListing);
listingRouter.delete("/delete/:id", verifyUser, deleteListing);

export default listingRouter;

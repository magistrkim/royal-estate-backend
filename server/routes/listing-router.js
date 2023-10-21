import express from "express";
import { createListing, deleteListing, updateListing, getListing } from "../controllers/listing/index.js";
import { verifyUser } from "../helpers/index.js";

const listingRouter = express.Router();

listingRouter.post("/create", verifyUser, createListing);
listingRouter.delete("/delete/:id", verifyUser, deleteListing);
listingRouter.post("/update/:id", verifyUser, updateListing);
listingRouter.get("/get/:id", getListing);

export default listingRouter;

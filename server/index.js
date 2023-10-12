import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// l1iV9rLIwysk5Fpc
// mongodb+srv://magistrkim:<password>@royal-estate.pryvmxl.mongodb.net/
// localhost:27017

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Successful connection to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

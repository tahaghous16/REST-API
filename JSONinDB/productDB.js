import { product } from "../models/product.model.js";
import productJSON from "./product.json" assert { type: "json" };
import { connectDB } from "../db/connect.js";
import dotenv from "dotenv";

dotenv.config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    await product.deleteMany();
    await product.create(productJSON);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();

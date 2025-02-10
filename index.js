import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes.js";
const app = express();
import { connectDB } from "./db/connect.js";

dotenv.config();

app.get("/", (req, res) => {
  res.send("I am Live");
});

app.use("/api/products", productRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

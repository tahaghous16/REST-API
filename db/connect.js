import mongoose from "mongoose";

const connectDB = (uri) => {
  console.log("Connected DB!");
  return mongoose.connect(uri);
};

export { connectDB };

import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables early
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/AuthDatabase";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

export default connectDB;

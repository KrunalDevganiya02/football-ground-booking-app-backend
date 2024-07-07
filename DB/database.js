import mongoose from "mongoose";
import "dotenv/config";

const database = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {});
    console.log("MongoDB connected successfully !");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

export default database;

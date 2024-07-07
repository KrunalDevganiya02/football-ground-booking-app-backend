import mongoose from "mongoose";

const groundSchema = new mongoose.Schema({
  groundName: { type: String, required: true, unique: true },
  photoURL: { type: String, required: true },
});

export const Ground = mongoose.model("Ground", groundSchema);

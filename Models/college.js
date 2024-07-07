import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  collegeName: { type: String, required: true, unique: true },
  grounds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ground",
    },
  ],
});

export const College = mongoose.model("College", collegeSchema);

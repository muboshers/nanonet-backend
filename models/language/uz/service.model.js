import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    cetagory: String,
  },
  {
    timestamps: true,
  }
);

export const uzServiceModel = mongoose.model("uzservice", serviceSchema);

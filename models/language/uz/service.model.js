import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    cetagory: string,
  },
  {
    timestamps: true,
  }
);

export const uzServiceModel = mongoose.model("uzservice", serviceSchema);

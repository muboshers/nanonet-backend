import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

export const enServiceModel = mongoose.model("enservice", serviceSchema);

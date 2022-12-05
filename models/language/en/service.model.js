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

export const enServiceModel = mongoose.model("enservice", serviceSchema);

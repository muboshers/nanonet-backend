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

export const ruServiceModel = mongoose.model("ruservice", serviceSchema);

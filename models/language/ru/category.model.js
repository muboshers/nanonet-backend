import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  category: String,
});

export const ruCategoryModel = mongoose.model(
  "rucategorymodel",
  categorySchema
);

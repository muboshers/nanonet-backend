import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  category: String,
});

export const uzCategoryModel = mongoose.model(
  "uzcategorymodel",
  categorySchema
);

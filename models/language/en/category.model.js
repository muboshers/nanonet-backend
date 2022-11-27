import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  category: String,
});

export const enCategoryModel = mongoose.model(
  "encategorymodel",
  categorySchema
);

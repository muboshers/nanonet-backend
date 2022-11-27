import mongoose from "mongoose";

const educationalSchema = mongoose.Schema({
  type: String,
});

export const uzEducationalModel = mongoose.model(
  "uzeducationmodel",
  educationalSchema
);

import mongoose from "mongoose";

const educationalSchema = mongoose.Schema({
  type: String,
});

export const engEducationalModel = mongoose.model(
  "eneducationmodel",
  educationalSchema
);

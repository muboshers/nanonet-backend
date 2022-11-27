import mongoose from "mongoose";

const educationalSchema = mongoose.Schema({
  type: String,
});

export const ruEducationalModel = mongoose.model(
  "rueducationmodel",
  educationalSchema
);

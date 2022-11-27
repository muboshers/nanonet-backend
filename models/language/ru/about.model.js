import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  serviceInfo: String,
});

export const ruAboutModel = new mongoose.model("ruabout", aboutSchema);

import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
  title: String,
  description: String,
  serviceInfo: String,
});

export const engAboutModel = new mongoose.model("enabout", aboutSchema);
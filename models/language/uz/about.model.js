import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
  title: String,
  description: String,
  author: String,
});

export const uzAboutModel = new mongoose.model("uzabout", aboutSchema);

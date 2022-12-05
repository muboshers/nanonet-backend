import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
  title: String,
  description: String,
});

export const engAboutModel = mongoose.model("enabout", aboutSchema);

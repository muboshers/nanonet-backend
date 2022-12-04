import mongoose from "mongoose";

const BlogSchema = mongoose.Schema(
  {
    creator: String,
    title: String,
    blogImage: String,
    description: String,
  },
  { timestamps: true }
);

export const enBlogModel = mongoose.model("enblog", BlogSchema);

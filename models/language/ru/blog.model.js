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

export const ruBlogModel = mongoose.model("rublog", BlogSchema);

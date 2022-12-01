import mongoose from "mongoose";

const BlogSchema = mongoose.Schema(
  {
    creator: String,
    title: String,
    creator: String,
    blogImage: String,
    description: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const uzBlogModel = mongoose.model("uzblog", BlogSchema);

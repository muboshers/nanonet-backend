import mongoose from "mongoose";

const BlogSchema = mongoose.Schema(
  {
    creator: String,
    title: String,
    blogImage: String,
    description: {
      type: Array,
      default: [],
    },

    creator: String,
  },
  { timestamps: true }
);

export const enBlogModel = mongoose.model("enblog", BlogSchema);

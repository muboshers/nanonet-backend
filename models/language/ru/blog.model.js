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
  },
  { timestamps: true }
);

export const ruBlogModel = mongoose.model("rublog", BlogSchema);

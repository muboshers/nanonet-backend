import mongoose from "mongoose";

export const cardSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
  isOnline: {
    type: Boolean,
    default: true,
  },
});

export const uzCardModel = mongoose.model("uzcardmodel", cardSchema);

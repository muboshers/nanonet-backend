import mongoose from "mongoose";

export const cardSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
  isOnline: {
    type: Boolean,
    default: false,
  },
});
export const enCardModel = mongoose.model("encardmodel", cardSchema);

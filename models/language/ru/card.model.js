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
export const ruCardModel = mongoose.model("rucardmodel", cardSchema);

import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    contactMessage: String,
    isCheck: {
      type: Boolean,
      default: false,
    },  
  },
  { timestamps: true }
);

export const enContactModel = mongoose.model("encontact", contactSchema);

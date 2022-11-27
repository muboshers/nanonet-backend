import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    contactMessage: String,
  },
  { timestamps: true }
);
export const ruContactModel = mongoose.model("rucontact", contactSchema);

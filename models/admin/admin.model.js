import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: String,
  password: String,
});

export const adminModel = mongoose.model("admin", AdminSchema);

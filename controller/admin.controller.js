// import bcrypt for generate password
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";
// import adminModel
import { adminModel } from "../models/admin/admin.model.js";
// create admin
export const createAdmin = async (req, res) => {
  const { email } = req.body;
  const currentAdmin = await adminModel.findOne({ email });

  if (currentAdmin)
    return res.status(401).json({ message: "Admin alrady exist" });
  try {
    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    await adminModel.create({
      name: req.body.name,
      email: email,
      password: hashedPassword,
    });
    res.status(200).json({ message: "Admin succesfully created" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Something wrong ${error.message}` });
  }
};
// update admin
export const updateAdmin = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "Incorrect id or admin not found" });

  // if req.body password has generate new password
  if (req.body.password) {
    const salt = await bcryptjs.genSalt(12);
    req.body.password = await bcryptjs.hash(req.body.password, salt);
  }

  try {
    await adminModel.findByIdAndUpdate(id, { $set: req.body });
    res.status(200).json({ message: "Succesfully update" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Something wrong ${error.message}` });
  }
};
// delete admin
export const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "Incorrect id or admin not found" });

  try {
    await adminModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Succesfully deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Something wrong ${error.message}` });
  }
};
// get all admin
export const getAllAdmin = async (req, res) => {
  const admins = await adminModel.find();
  const newAdmin = admins.map((admin) => {
    const { password, ...others } = admin._doc;
    return {
      admin: others,
    };
  });

  try {
    res.status(200).json(newAdmin);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Something wrong ${error.message}` });
  }
};
// get by id
export const getByIdAdmin = async (req, res) => {
  const { id } = req.params;
  const currentAdmin = await adminModel.findById(id);
  if (!currentAdmin)
    return res.status(404).json({ message: "Incorrect id or admin not found" });
  try {
    const { password, ...others } = currentAdmin._doc;
    res.status(200).json(others);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Something wrong ${error.message}` });
  }
};

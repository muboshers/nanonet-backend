import { adminModel } from "../models/admin/admin.model.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const authController = async (req, res) => {
  const admin = await adminModel.findOne({ email: req.body.email });

  // check admin if admin not found then return 404 response
  if (!admin) return res.status(404).json({ message: "Admin Not Found" });
  //   check password
  const checkPassword = await bcryptjs.compare(
    req.body.password,
    admin.password
  );

  if (!checkPassword)
    return res.status(404).json({ message: "Invalid Password" });

  try {
    const token = jwt.sign(
      { email: admin.email, id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({ admin, token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Something wrong ${error.message}` });
  }
};

import { Router } from "express";
import {
  createAdmin,
  deleteAdmin,
  getAllAdmin,
  getByIdAdmin,
  updateAdmin,
} from "../controller/admin.controller.js";

const router = Router();
  // create admin
router.post("/", createAdmin);
// update admin
router.patch("/:id", updateAdmin);
// delete admin
router.delete("/:id", deleteAdmin);
// get all admin
router.get("/", getAllAdmin);
// get by id
router.get("/:id", getByIdAdmin);
export default router;

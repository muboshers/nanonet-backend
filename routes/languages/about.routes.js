import { Router } from "express";
import {
  enaboutCreateController,
  enaboutDeleteController,
  enaboutGetAllController,
  enaboutGetByIdController,
  enaboutUpdateController,
} from "../../controller/en/about.controller.js";

const router = Router();
// create about
router.post("/", enaboutCreateController);
// update about
router.patch("/:id", enaboutUpdateController);
// delete about
router.delete("/:id", enaboutDeleteController);
// get all about
router.get("/", enaboutGetAllController);
// get by id
router.get("/", enaboutGetByIdController);

export default router;

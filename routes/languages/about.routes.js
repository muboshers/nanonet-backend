import { Router } from "express";
import {
  aboutCreateController,
  aboutUpdateController,
  aboutDeleteController,
  getAllAboutController,
  getByIdAboutController,
} from "../../controller/languages/about.controller.js";
const router = Router();
// create about
router.post("/", aboutCreateController);
// update about
router.patch("/:id", aboutUpdateController);
// delete about
router.delete("/:id", aboutDeleteController);
// get all about
router.get("/", getAllAboutController);
// get by id
router.get("/:id", getByIdAboutController);

export default router;

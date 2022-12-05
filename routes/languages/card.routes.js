import { Router } from "express";
import {
  createCardController,
  deleteCardController,
  getAllCardController,
  getByIdCardController,
  updateCardToOnlineController,
} from "../../controller/languages/card.controller.js";

const router = Router();
// create card controller
router.post("/", createCardController);
// update card
router.patch("/:id", updateCardToOnlineController);
// delete card controller
router.delete("/:id", deleteCardController);
// get all
router.get("/", getAllCardController);
// get by id
router.get("/:id", getByIdCardController);

export default router;

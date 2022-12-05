import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getAllContactMessageController,
  updateToReadContactController,
} from "../../controller/languages/contact.controller.js";

const router = Router();

// create contact route
router.post("/", createContactController);
// update to read
router.patch("/:id", updateToReadContactController);
// delete messages
router.delete("/:id", deleteContactController);
// get all information
router.get("/", getAllContactMessageController);


export default router;

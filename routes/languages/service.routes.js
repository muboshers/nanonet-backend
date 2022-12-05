import { Router } from "express";
import {
  createServiceController,
  deleteServiceController,
  getAllServiceController,
  getByIdServiceController,
  updateServiceController,
} from "../../controller/languages/service.controller.js";

const router = Router();

// create a service
router.post("/", createServiceController);
// update a service
router.patch("/:id", updateServiceController);
// delete a service
router.delete("/:id", deleteServiceController);
// get by id
router.get("/:id", getByIdServiceController);
// get all service
router.post("/", getAllServiceController);

export default router;

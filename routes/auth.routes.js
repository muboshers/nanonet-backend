import { Router } from "express";
import { authController } from "../controller/auth.controller.js";

const router = Router();

// login routes
router.post("/", authController);

export default router;

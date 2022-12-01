import { Router } from "express";
import multer from "multer";
import {
  createBlogController,
  updateBlogController,
} from "../../controller/en/blog.controller.js";
import { uploadMidlleware } from "../../middleware/upload.js";
// image upload middleware
// image upload middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `image_${new Date().getFullYear()}_${new Date().getDate()}_${
        file.originalname
      }`
    );
  },
});

const upload = multer({ storage }).single("blogImage");
const router = Router();
// create blog
router.post("/", upload, createBlogController);
// update blog
router.patch("/:id", upload, updateBlogController);
export default router;

import { Router } from "express";
import multer from "multer";
import { createBlogController } from "../../controller/en/blog.controller.js";
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
      `${new Date().getFullYear()}_${new Date().getDate()}_${file.originalname}`
    );
  },
});

function multiplyUpload(req, res, next) {
  try {
    uploadMidlleware(storage).single("blogImage")(req, res, next);
    uploadMidlleware(storage, "blogCaption")(req, res, next);
    next();
  } catch (error) {
    res.status(500).json({ message: `Something wrong ${error.message}` });
  }
}

const router = Router();
// create blog controller
router.post("/", multiplyUpload, createBlogController);
export default router;

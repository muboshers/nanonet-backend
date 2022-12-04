import { Router } from "express";
import multer from "multer";
import {
  createBlogController,
  deleteBlogController,
  getAllBlogController,
  updateBlogController,
} from "../../controller/en/blog.controller.js";
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
// delete blog controller
router.delete("/:id", deleteBlogController);
// get all blog controller
router.get("/", getAllBlogController);

export default router;

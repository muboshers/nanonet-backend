// eng database module
import { enBlogModel } from "../../models/language/en/blog.model.js";
// ru database module
import { ruBlogModel } from "../../models/language/ru/blog.model.js";
// uz database module
import { uzBlogModel } from "../../models/language/uz/blog.model.js";

// create blog
export const createBlogController = async (req, res) => {
  const { lang } = req.body;
  console.log(lang);
  console.log(req);
  res.status(200).json(req.files);
  // if (lang.toLowerCase() === "en") {
  //   try {
  //     await enBlogModel.create({
  //       title: req.body.title,
  //       creator: req.body.name,
  //       blogImage: req.files.originalname,
  //       description: req.body.description,
  //       blogCaption: req.files.blogCaption,
  //     });
  //     res.status(200).json({ message: "Blog succesfully created" });
  //   } catch (error) {
  //     return res
  //       .status(404)
  //       .json({ message: `Something wrong ${error.message}` });
  //   }
  // }
};

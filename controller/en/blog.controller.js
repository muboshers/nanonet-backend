// eng database module
import { createMiddleWare } from "../../middleware/create.js";
import { enBlogModel } from "../../models/language/en/blog.model.js";
// ru database module
import { ruBlogModel } from "../../models/language/ru/blog.model.js";
// uz database module
import { uzBlogModel } from "../../models/language/uz/blog.model.js";

// file systems
import fs from "fs";

// create blog
export const createBlogController = async (req, res) => {
  const { lang = "en" } = req.body;
  const fileName = req?.file?.filename || "";
  try {
    if (lang === "en") {
      await createMiddleWare(
        req,
        res,
        enBlogModel,
        "Something wrong",
        "Succesfully created",
        fileName
      );

      await uzBlogModel.create({
        title: "",
        desciption: [],
        creator: "",
        blogImage: fileName,
      });

      await ruBlogModel.create({
        title: "",
        desciption: [],
        creator: "",
        blogImage: fileName,
      });

      res.status(200).json({ message: "Succesfully created" });
    } else if (lang === "ru") {
      try {
        if (req.file)
          return res
            .status(500)
            .json({ message: "Iltimios oldin ingliz tilida yarating" });

        const findCurrentBlog = await ruBlogModel.findOne({
          blogImage: req.body.image,
        });
        if (!findCurrentBlog)
          return res
            .status(404)
            .status({ message: "Only english language upload file" });
        await findCurrentBlog.updateOne({ title: req.body.title });
        await findCurrentBlog.updateOne({ desciption: req.body.desciption });
        await findCurrentBlog.updateOne({ creator: req.body.creator });
        res.status(200).json({ message: "Blog muvaqqiyatli yaratildi" });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    } else {
      const findCurrentBlog = await uzBlogModel.findOne({
        blogImage: req.body.image,
      });

      if (!findCurrentBlog)
        return res
          .status(404)
          .status({ message: "Oldin ingliz tilida blog yarating" });
      await findCurrentBlog.updateOne({ title: req.body.title });
      await findCurrentBlog.updateOne({ desciption: req.body.desciption });
      await findCurrentBlog.updateOne({ creator: req.body.creator });
      res.status(200).json({ message: "Blog muvaqqiyatli yaratildi" });
    }
  } catch (error) {
    return res.status(200).json({ message: `${error.message}` });
  }
};

// update controller
export const updateBlogController = async (req, res) => {
  const { lang = "en" } = req.body;
  const { id } = req.params;
  let db_image = req.body.image;
  try {
    if (lang === "en") {
      const engBlog = await enBlogModel.findById(id);

      const ruCurrentBlog = await ruBlogModel.findOne({
        blogImage: db_image,
      });

      const uzCurrentBlog = await uzBlogModel.findOne({
        blogImage: db_image,
      });

      if (req.file) {
        console.log(req.file.filename);
        fs.unlinkSync(`./images/${req.body.image}`);
        db_image = req.file.filename;
        await ruCurrentBlog.updateOne({ blogImage: db_image });
        await uzCurrentBlog.updateOne({ blogImage: db_image });
        await engBlog.updateOne({ blogImage: db_image });
        await engBlog.updateOne({ title: req.body.title });
        await engBlog.updateOne({ desciption: req.body.desciption });
      }
      await engBlog.updateOne({ title: req.body.title });
      await engBlog.updateOne({ desciption: req.body.desciption });

      return res.status(200).json({ message: "Blog succesfully yangilandi" });
    } else if (lang === "ru") {
      const findCurrentBlog = await ruBlogModel.findOne({
        blogImage: db_image,
      });
      console.log(findCurrentBlog);
      if (!findCurrentBlog)
        return res
          .status(404)
          .status({ message: "Only english language upload file" });
      await findCurrentBlog.updateOne({ title: req.body.title });
      await findCurrentBlog.updateOne({ desciption: req.body.desciption });
      await findCurrentBlog.updateOne({ creator: req.body.creator });
      res.status(200).json({ message: "Blog muvaqqiyatli yangilandi" });
    } else {
      const findCurrentBlog = await uzBlogModel.findOne({
        blogImage: db_image,
      });

      if (!findCurrentBlog)
        return res
          .status(404)
          .status({ message: "Oldin ingliz tilida blog yarating" });
      await findCurrentBlog.updateOne({ title: req.body.title });
      await findCurrentBlog.updateOne({ desciption: req.body.desciption });
      await findCurrentBlog.updateOne({ creator: req.body.creator });
      res.status(200).json({ message: "Blog muvaqqiyatli yangilandi" });
    }
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
};

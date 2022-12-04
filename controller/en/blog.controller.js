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
  const { lang = "en" } = req.query;
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
        desciption: "",
        creator: "",
        blogImage: fileName,
      });

      await ruBlogModel.create({
        title: "",
        desciption: "",
        creator: "",
        blogImage: fileName,
      });

      res.status(200).json({ message: "Succesfully created" });
    } else if (lang === "ru") {
      try {
        const findCurrentBlog = await ruBlogModel.findOne({
          blogImage: req.body.image,
        });
        console.log(findCurrentBlog);
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
  const { id } = req.params;
  const { lang = "en" } = req.body;
  let db_image = "";
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
      await engBlog.updateOne({ description: req.body.description });
    }
    await engBlog.updateOne({ title: req.body.title });
    await engBlog.updateOne({ description: req.body.description });

    return res.status(200).json({ message: "Blog succesfully yangilandi" });
  } else if (lang === "ru") {
    try {
      const findCurrentBlog = await ruBlogModel.findById(id);
      if (!findCurrentBlog)
        return res
          .status(404)
          .status({ message: "Only english language upload file" });
      await findCurrentBlog.updateOne({ title: req.body.title });
      await findCurrentBlog.updateOne({ description: req.body.description });
      await findCurrentBlog.updateOne({ creator: req.body.creator });
      res.status(200).json({ message: "Blog muvaqqiyatli yangilandi" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else {
    const findCurrentBlog = await uzBlogModel.findById(id);
    if (!findCurrentBlog)
      return res
        .status(404)
        .status({ message: "Oldin ingliz tilida blog yarating" });
    await findCurrentBlog.updateOne({ title: req.body.title });
    await findCurrentBlog.updateOne({ description: req.body.description });
    await findCurrentBlog.updateOne({ creator: req.body.creator });
    res.status(200).json({ message: "Blog muvaqqiyatli yangilandi" });
  }
};

// delete blog Controller
export const deleteBlogController = async (req, res) => {
  const { id } = req.params;
  const { lang = "en" } = req.query;
  try {
    if (lang === "en") {
      const blog = await enBlogModel.findById(id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      fs.unlinkSync(`./images/${blog._doc.blogImage}`);
      const ruBlog = await ruBlogModel.findOne({ blogImage: blog.blogImage });
      const uzBlog = await uzBlogModel.findOne({ blogImage: blog.blogImage });
      await enBlogModel.findOneAndDelete(id);
      await ruBlogModel.findOneAndDelete(ruBlog._doc._id);
      await uzBlogModel.findOneAndDelete(uzBlog._doc._id);
    } else if (lang === "ru") {
      const blog = await ruBlogModel.findById(id);

      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }

      fs.unlinkSync(`./images/${blog._doc.blogImage}`);
      const enBlog = await ruBlogModel.findOne({ blogImage: blog.blogImage });
      const uzBlog = await uzBlogModel.findOne({ blogImage: blog.blogImage });
      await ruBlogModel.findOneAndDelete(id);
      await enBlogModel.findOneAndDelete(enBlog._doc._id);
      await uzBlogModel.findOneAndDelete(uzBlog._doc._id);
      // await
    } else {
      const blog = await uzBlogModel.findById(id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      fs.unlinkSync(`./images/${blog._doc.blogImage}`);
      const enBlog = await enBlogModel.findOne({ blogImage: blog.blogImage });
      const ruBlog = await ruBlogModel.findOne({ blogImage: blog.blogImage });
      await uzBlogModel.findOneAndDelete(id);
      await enBlogModel.findOneAndDelete(enBlog._doc._id);
      await ruBlogModel.findOneAndDelete(ruBlog._doc._id);
    }
    return res.status(200).json({ message: "Blog succesfully deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getAllBlogController = async (req, res) => {
  const { lang = "en" } = req.query;

  try {
    if (lang === "en") {
      const engBlog = await enBlogModel.find();
      try {
        return res.status(200).json(engBlog);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    } else if (lang === "ru") {
      const ruBlog = await ruBlogModel.find();
      try {
        return res.status(200).json(ruBlog);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    } else {
      const uzBlog = await uzBlogModel.find();
      try {
        return res.status(200).json(uzBlog);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

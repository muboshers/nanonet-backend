import mongoose from "mongoose";
// eng module
import { engAboutModel } from "../../models/language/en/about.model.js";
// ru module
import { ruAboutModel } from "../../models/language/ru/about.model.js";
// uz module
import { uzAboutModel } from "../../models/language/uz/about.model.js";
// about create
export const aboutCreateController = async (req, res) => {
  const { lang } = req.body;
  if (lang.toLowerCase() === "en") {
    try {
      await engAboutModel.create({
        title: req.body.title,
        description: req.body.description,
      });

      res
        .status(200)
        .json({ message: "Succesfully created about information " });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Something wrong ${error.message}` });
    }
  } else if (lang.toLowerCase() === "ru") {
    try {
      await ruAboutModel.create({
        title: req.body.title,
        description: req.body.description,
      });

      res
        .status(200)
        .json({ message: "Succesfully created about information " });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Something wrong ${error.message}` });
    }
  } else {
    try {
      await uzAboutModel.create({
        title: req.body.title,
        description: req.body.description,
      });

      res.status(200).json({ message: "Ma'lumot muvaqqiyatli yaratildi " });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Qandaydir xatolik mavjud ${error.message}` });
    }
  }
};
// update about
export const aboutUpdateController = async (req, res) => {
  const { lang } = req.body;
  const { id } = req.params;
  if (lang.toLowerCase() === "en") {
    try {
      const currentInformation = await engAboutModel.findById(id);

      if (!currentInformation)
        return res.status(404).json({ message: "About Information Not Found" });

      await engAboutModel.findByIdAndUpdate(id, { $set: req.body });
      res
        .status(200)
        .json({ message: "Succesfully update about information " });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Something wrong ${error.message}` });
    }
  } else if (lang.toLowerCase() === "ru") {
    try {
      const currentInformation = await ruAboutModel.findById(id);

      if (!currentInformation)
        return res.status(404).json({ message: "About Information Not Found" });

      await ruAboutModel.findByIdAndUpdate(id, { $set: req.body });

      res
        .status(200)
        .json({ message: "Succesfully update about information " });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Something wrong ${error.message}` });
    }
  } else {
    try {
      const currentInformation = await uzAboutModel.findById(id);

      if (!currentInformation)
        return res.status(404).json({ message: "Ma'lumot mavjud emas" });

      await uzAboutModel.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json({ message: "Ma'lumot muvaqqiyatli yangilandi " });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Qandaydir xatolik mavjud ${error.message}` });
    }
  }
};
// delete about
export const aboutDeleteController = async (req, res) => {
  const { lang } = req.body;
  const { id } = req.params;
  if (lang.toLowerCase() === "en") {
    try {
      const currentInformation = await engAboutModel.findById(id);

      if (!currentInformation)
        return res.status(404).json({ message: "About Information Not Found" });

      await engAboutModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: "Succesfully delete about information " });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Something wrong ${error.message}` });
    }
  } else if (lang.toLowerCase() === "ru") {
    try {
      const currentInformation = await ruAboutModel.findById(id);

      if (!currentInformation)
        return res.status(404).json({ message: "About Information Not Found" });

      await ruAboutModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ message: "Succesfully delete about information " });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Something wrong ${error.message}` });
    }
  } else {
    try {
      const currentInformation = await uzAboutModel.findById(id);

      if (!currentInformation)
        return res.status(404).json({ message: "Ma'lumot mavjud emas" });

      await uzAboutModel.findByIdAndDelete(id);
      res.status(200).json({ message: "Ma'lumot muvaqqiyatli o'chirildi " });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Qandaydir xatolik mavjud ${error.message}` });
    }
  }
};
// get all about information
export const getAllAboutController = async (req, res) => {
  const { lang } = req.body;
  if (lang.toLowerCase() === "en") {
    try {
      const currentInformation = await engAboutModel.find();
      res.status(200).json(currentInformation);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Something wrong ${error.message}` });
    }
  } else if (lang.toLowerCase() === "ru") {
    try {
      const currentInformation = await ruAboutModel.find();
      res.status(200).json(currentInformation);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Something wrong ${error.message}` });
    }
  } else {
    try {
      const currentInformation = await uzAboutModel.find();
      res.status(200).json(currentInformation);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Qandaydir xatolik mavjud ${error.message}` });
    }
  }
};
// get by id about information
export const getByIdAboutController = async (req, res) => {
  const { id } = req.params;
  const { lang } = req.body;

  if (lang.toLowerCase() === "en") {
    const currentAboutInformation = await engAboutModel.findById(id);

    if (!currentAboutInformation)
      return res.status(404).json({ message: "Information not found" });

    try {
      res.status(200).json(currentAboutInformation);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Something wrong ${error.message}` });
    }
  } else if (lang.toLowerCase() === "ru") {
    const currentAboutInformation = await ruAboutModel.findById(id);

    if (!currentAboutInformation)
      return res.status(404).json({ message: "Information not found" });

    try {
      res.status(200).json(currentAboutInformation);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Something wrong ${error.message}` });
    }
  } else {
    const currentAboutInformation = await uzAboutModel.findById(id);

    if (!currentAboutInformation)
      return res.status(404).json({ message: "Ma'lumot mavjud emas" });

    try {
      res.status(200).json(currentAboutInformation);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Qandaydir xatolik mavjud ${error.message}` });
    }
  }
};

import { enCardModel } from "../../models/language/en/card.model.js";
import { ruCardModel } from "../../models/language/ru/card.model.js";
import { uzCardModel } from "../../models/language/uz/card.model.js";
// create service
export const createCardController = async (req, res) => {
  const { lang = "en" } = req.query;
  if (lang === "en") {
    try {
      await enCardModel.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
      });
      res.status(200).json({ message: "Card  Succesfully created" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (lang === "ru") {
    try {
      M;
      await ruCardModel.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
      });
      res.status(200).json({ message: "Card yaratildi" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    try {
      await uzCardModel.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
      });
      res.status(200).json({ message: "Service yaratildi" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
// delete servoce
export const deleteCardController = async (req, res) => {
  const { lang = "en" } = req.query;
  const { id } = req.params;
  if (lang === "en") {
    try {
      await enCardModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Succesfully deleted" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else if (lang === "tu") {
    try {
      await ruCardModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Succesfully deleted" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else {
    try {
      await uzCardModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Succesfully deleted" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  }
};
// update to read servoce message
export const updateCardToOnlineController = async (req, res) => {
  const { lang = "en" } = req.query;
  const { id } = req.params;
  if (lang === "en") {
    const servoceInfo = await enCardModel.findById(id);
    if (!servoceInfo) return res.status(404).json({ message: "Not found" });
    try {
      await servoceInfo.updateOne({ isOnline: !servoceInfo._doc.servoceInfo });
      return res.status(200).json({ message: "Succesfully update" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else if (lang === "ru") {
    const servoceInfo = await ruCardModel.findById(id);
    if (!servoceInfo) return res.status(404).json({ message: "Not found" });
    try {
      await servoceInfo.updateOne({
        isOnline: !servoceInfo._doc.servoceInfo,
      });

      return res.status(200).json({ message: "Succesfully update" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else {
    const servoceInfo = await uzCardModel.findById(id);
    if (!servoceInfo) return res.status(404).json({ message: "Not found" });
    try {
      await servoceInfo.updateOne({
        isOnline: !servoceInfo._doc.servoceInfo,
      });
      return res.status(200).json({ message: "Succesfully update" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  }
};
// get all servoce message
export const getAllCardController = async (req, res) => {
  const { lang = "en", category } = req.query;

  if (lang === "en") {
    try {
      const allMessage = await enCardModel.find({ category });
      res.status(200).json(allMessage);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (lang === "ru") {
    try {
      const allMessage = await ruCardModel.find({ category });
      res.status(200).json(allMessage);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const allMessage = await uzCardModel.find({ category });
      res.status(200).json(allMessage);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
// get by id service controller
export const getByIdCardController = async (req, res) => {
  const { lang = "en" } = req.query;
  const { id } = req.params;
  if (lang === "en") {
    const currentServiceInfo = await enCardModel.findById(id);
    if (!currentServiceInfo)
      return res.status(404).json({ message: "Not found" });
    try {
      res.status(200).json(currentServiceInfo);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (lang === "ru") {
    const currentServiceInfo = await ruCardModel.findById(id);
    if (!currentServiceInfo)
      return res.status(404).json({ message: "Not found" });
    try {
      res.status(200).json(currentServiceInfo);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    const currentServiceInfo = await uzCardModel.findById(id);
    if (!currentServiceInfo)
      return res.status(404).json({ message: "Not found" });
    try {
      res.status(200).json(currentServiceInfo);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

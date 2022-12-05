import { enServiceModel } from "../../models/language/en/service.model.js";
import { ruServiceModel } from "../../models/language/ru/servive.model.js";
import { uzServiceModel } from "../../models/language/uz/service.model.js";
// create service
export const createServiceController = async (req, res) => {
  const { lang = "en" } = req.query;
  if (lang === "en") {
    try {
      await enServiceModel.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
      });
      res.status(200).json({ message: "Servive Succesfully created" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (lang === "ru") {
    try {
      await ruServiceModel.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
      });
      res.status(200).json({ message: "Servie yaratildi" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    try {
      await uzServiceModel.create({
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
export const deleteServiceController = async (req, res) => {
  const { lang = "en" } = req.query;
  const { id } = req.params;
  if (lang === "en") {
    try {
      await enServiceModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Succesfully deleted" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else if (lang === "tu") {
    try {
      await ruServiceModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Succesfully deleted" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else {
    try {
      await uzServiceModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Succesfully deleted" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  }
};
// update to read servoce message
export const updateServiceController = async (req, res) => {
  const { lang = "en" } = req.query;
  const { id } = req.params;
  if (lang === "en") {
    const servoceInfo = await enServiceModel.findById(id);
    if (!servoceInfo) return res.status(404).json({ message: "Not found" });
    try {
      await enServiceModel.findByIdAndUpdate(id, { $set: req.body });
      return res.status(200).json({ message: "Succesfully update" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else if (lang === "ru") {
    const servoceInfo = await ruServiceModel.findById(id);
    if (!servoceInfo) return res.status(404).json({ message: "Not found" });
    try {
      await ruServiceModel.findByIdAndUpdate(id, { $set: req.body });
      return res.status(200).json({ message: "Succesfully update" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else {
    const servoceInfo = await uzServiceModel.findById(id);
    if (!servoceInfo) return res.status(404).json({ message: "Not found" });
    try {
      await uzServiceModel.findByIdAndUpdate(id, { $set: req.body });
      return res.status(200).json({ message: "Succesfully update" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  }
};
// get all servoce message
export const getAllServiceController = async (req, res) => {
  const { lang = "en", category } = req.query;

  if (lang === "en") {
    try {
      const allMessage = await enServiceModel.find({ category });
      res.status(200).json(allMessage);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (lang === "ru") {
    try {
      const allMessage = await ruServiceModel.find({ category });
      res.status(200).json(allMessage);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const allMessage = await uzServiceModel.find({ category });
      res.status(200).json(allMessage);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

// get by id service controller
export const getByIdServiceController = async (req, res) => {
  const { lang = "en" } = req.query;

  const { id } = req.params;

  if (lang === "en") {
    const currentServiceInfo = await enServiceModel.findById(id);
    if (!currentServiceInfo)
      return res.status(404).json({ message: "Not found" });
    try {
      res.status(200).json(currentServiceInfo);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (lang === "ru") {
    const currentServiceInfo = await ruServiceModel.findById(id);
    if (!currentServiceInfo)
      return res.status(404).json({ message: "Not found" });
    try {
      res.status(200).json(currentServiceInfo);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    const currentServiceInfo = await uzServiceModel.findById(id);
    if (!currentServiceInfo)
      return res.status(404).json({ message: "Not found" });
    try {
      res.status(200).json(currentServiceInfo);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

import { enContactModel } from "../../models/language/en/contact.model.js";
import { ruContactModel } from "../../models/language/ru/contact.model.js";
import { uzContactModel } from "../../models/language/uz/contact.model.js";

// create contact
export const createContactController = async (req, res) => {
  const { lang = "en" } = req.query;
  if (lang === "en") {
    try {
      await enContactModel.create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        contactMessage: req.body.contactMessage,
      });
      res.status(200).json({ message: "Ok ariza qabul qilindi" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (lang === "ru") {
    try {
      await ruContactModel.create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        contactMessage: req.body.contactMessage,
      });
      res.status(200).json({ message: "Ok ariza qabul qilindi" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    try {
      await uzContactModel.create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        contactMessage: req.body.contactMessage,
      });
      res.status(200).json({ message: "Ok ariza qabul qilindi" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
// delete contact
export const deleteContactController = async (req, res) => {
  const { lang = "en" } = req.query;
  const { id } = req.params;
  if (lang === "en") {
    try {
      await enContactModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Succesfully deleted" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else if (lang === "tu") {
    try {
      await ruContactModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Succesfully deleted" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else {
    try {
      await uzContactModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Succesfully deleted" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  }
};
// update to read contact message
export const updateToReadContactController = async (req, res) => {
  const { lang = "en" } = req.query;
  const { id } = req.params;
  if (lang === "en") {
    const contactInfo = await enContactModel.findById(id);
    if (!contactInfo) return res.status(404).json({ message: "Not found" });
    try {
      await contactInfo.updateOne({ isCheck: true });
      return res.status(200).json({ message: "Succesfully read" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else if (lang === "ru") {
    const contactInfo = await ruContactModel.findById(id);
    if (!contactInfo) return res.status(404).json({ message: "Not found" });
    try {
      await contactInfo.updateOne({ isCheck: true });
      return res.status(200).json({ message: "Succesfully read" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  } else {
    const contactInfo = await uzContactModel.findById(id);
    if (!contactInfo) return res.status(404).json({ message: "Not found" });
    try {
      await contactInfo.updateOne({ isCheck: true });
      return res.status(200).json({ message: "Succesfully read" });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  }
};
// get all contact message
export const getAllContactMessageController = async (req, res) => {
  const { lang = "en" } = req.query;

  if (lang === "en") {
    try {
      const allMessage = await enContactModel.find();
      res.status(200).json(allMessage);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (lang === "ru") {
    try {
      const allMessage = await ruContactModel.find();
      res.status(200).json(allMessage);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const allMessage = await uzContactModel.find();
      res.status(200).json(allMessage);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

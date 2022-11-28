import multer from "multer";

export const uploadMidlleware = (storage, fileName) => {
  if (fileName) {
    return multer({ storage }).any(fileName);
  }
  return multer({ storage });
};

const multer = require("multer");
const allowedFileType = ["image/jpeg", "image/png", "image/jpg"];

const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  if (allowedFileType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    req.fileValidationError = "Only .jpeg, .png and .jpg images allowed!";
    cb(null, false, req.fileValidationError);
  }
};
const upload = multer({ storage, fileFilter });

module.exports = upload;

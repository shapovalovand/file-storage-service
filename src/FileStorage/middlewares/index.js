const multer = require('multer');
const path = require('path');

const MAX_UPLOAD_LENGTH = 7 * 1024 * 1024;

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: MAX_UPLOAD_LENGTH },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Invalid file type'));
  },
});
module.exports.upload = upload;

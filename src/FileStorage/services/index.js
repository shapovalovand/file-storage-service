const { LocalFileStorage } = require('../adaptors');
const FileModel = require('../models/FileModel');

class FileService {
  static async get(filename) {
    const item = await FileModel.findOne({ where: { filename } });

    if (!item) throw new Error('Unprocessable entity');

    const fileStream = LocalFileStorage.get(filename);

    return {
      fileStream,
      size: item.size,
      mimetype: item.mimetype,
    };
  }

  static async upload(filename, file) {
    LocalFileStorage.upload(file.buffer, filename);
    FileModel.create({
      filename,
      mimetype: file.mimetype,
      size: file.size,
    });

    return true;
  }
}

module.exports = { FileService };

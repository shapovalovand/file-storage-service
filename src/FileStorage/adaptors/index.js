const fs = require('fs');
const path = require('path');

class LocalFileStorage {
  static get(filename) {
    const filePath = path.resolve() + '/data/' + `${filename}`;

    if (!fs.existsSync(filePath)) throw new Error('Unprocessable entity');

    const readStream = fs.createReadStream(filePath);

    return readStream;
  }

  static upload(binary, filename) {
    const writeStream = fs.createWriteStream(
      path.resolve() + '/data/' + `${filename}`
    );

    writeStream.write(binary);

    return writeStream;
  }
}

module.exports = { LocalFileStorage };

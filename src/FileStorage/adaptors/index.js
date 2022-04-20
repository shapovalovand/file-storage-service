const fs = require('fs');
const path = require('path');

class LocalFileStorage {
  static get(filename) {
    const readStream = fs.createReadStream(
      path.resolve() + '/data/' + `${filename}`
    );
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

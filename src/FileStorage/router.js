const express = require('express');
const { upload } = require('./middlewares');
const { FileService } = require('./services');

const router = express.Router();

router.get('/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const { mimetype, size, fileStream } = await FileService.get(filename);

    res.setHeader('Content-Type', mimetype).setHeader('Content-Length', size);

    fileStream.pipe(res);
  } catch (error) {
    res.json({ status: 'error' }).status(404);
  }
});

router.put('/:filename', upload.single('file'), async (req, res) => {
  try {
    const { file } = req;
    const { filename } = req.params;

    await FileService.upload(filename, file);

    res.json({ status: 'success' });
  } catch (error) {
    res.status(404).json({ status: 'error' });
  }
});

module.exports = router;

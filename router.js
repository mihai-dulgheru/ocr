// const fs = require('fs');
const { Router } = require('express');
const { processImage, recognize, textToJson } = require('./functions');

const router = Router();
module.exports = router;

router.post('/recognize', async (req, res) => {
  const { image } = req.files;

  const processedImage = await processImage(image.data);
  const text = await recognize(processedImage);
  // fs.writeFile('output/data.txt', text, (err) => {
  //   if (err) throw err;
  // });
  const json = textToJson(text);

  return res.status(200).send(json);
});

const OEM = require('tesseract.js/src/constants/OEM.js');
const PSM = require('tesseract.js/src/constants/PSM.js');
const { createWorker } = require('tesseract.js');
const { processScoreSheet } = require('../../functions');

const worker = createWorker({});

module.exports = async (req, res) => {
  const { image } = req.files;

  const results = await processScoreSheet(image.data);
  const sheet = [];

  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  await worker.setParameters({
    tessedit_ocr_engine_mode: OEM.TESSERACT_LSTM_COMBINED,
    tessedit_pageseg_mode: PSM.SINGLE_LINE,
  });

  for (let i = 0; i < 50; i++) {
    const {
      data: { text: white },
    } = await worker.recognize(results[0][i]);
    const {
      data: { text: black },
    } = await worker.recognize(results[1][i]);
    sheet.push({
      line: i + 1,
      white: white.split('\n')[0].trim().split(' ')[0] || '',
      black: black.split('\n')[0].trim().split(' ')[0] || '',
    });
  }

  await worker.terminate();

  return res.status(200).send(sheet);
};

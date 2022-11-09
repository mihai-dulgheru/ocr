/* eslint-disable no-console */
const { createWorker } = require('tesseract.js');
const OEM = require('tesseract.js/src/constants/OEM.js');
const PSM = require('tesseract.js/src/constants/PSM.js');

const worker = createWorker({
  logger: (m) => console.log(m),
});

const recognize = async (data) => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  await worker.setParameters({
    tessedit_ocr_engine_mode: OEM.TESSERACT_LSTM_COMBINED,
    tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
  });
  const {
    data: { text },
  } = await worker.recognize(data);
  console.log(text);
  await worker.terminate();

  return text;
};

module.exports = recognize;

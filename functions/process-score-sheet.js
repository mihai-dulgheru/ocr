const Jimp = require('jimp');
const { kernel } = require('../data/kernel');

const f = 4;
const mode = Jimp.RESIZE_BEZIER;
const mime = Jimp.MIME_BMP;

const getHeight = (i, h, p) => {
  if (i === 24) return h;
  return h + p;
};

const processScoreSheet = async (img) => {
  const image = await Jimp.read(img);

  image.convolute(kernel).contrast(0.2);

  const column1 = image.clone();
  const column2 = image.clone();
  const { width, height } = image.bitmap;

  column1.crop(width * 0.075, height * 0.2295, width * 0.425, height * 0.685);
  // .write('output/column-1.jpeg');

  column2.crop(width * 0.5375, height * 0.2295, width * 0.425, height * 0.685);
  // .write('output/column-2.jpeg');

  const results = new Array(2).fill(null).map(() => new Array(50).fill(null));

  const w = column1.bitmap.width / 2;
  const h = column1.bitmap.height / 25;
  const p = h * 0.2;
  for (let i = 0; i < 25; i++) {
    const column1_white = column1.clone();
    const y = h * i;

    column1_white.crop(0, y, w, getHeight(i, h, p)).scale(f, mode);
    // .write(`output/column-1-white-${i + 1}.jpeg`);
    results[0][i] = await column1_white.getBufferAsync(mime);

    const column1_black = column1.clone();
    column1_black.crop(w, y, w, getHeight(i, h, p)).scale(f, mode);
    // .write(`output/column-1-black-${i + 1}.jpeg`);
    results[1][i] = await column1_black.getBufferAsync(mime);
  }

  for (let i = 0; i < 25; i++) {
    const column2_white = column2.clone();
    const y = h * i;

    column2_white.crop(0, y, w, getHeight(i, h, p)).scale(f, mode);
    // .write(`output/column-2-white-${i + 1}.jpeg`);
    results[0][i + 25] = await column2_white.getBufferAsync(mime);

    const column2_black = column2.clone();
    column2_black.crop(w, y, w, getHeight(i, h, p)).scale(f, mode);
    // .write(`output/column-2-black-${i + 1}.jpeg`);
    results[1][i + 25] = await column2_black.getBufferAsync(mime);
  }

  return results;
};

module.exports = processScoreSheet;

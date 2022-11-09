const Jimp = require('jimp');
// const { kernel } = require('../data/kernel');

const processScoreSheet = async (img) => {
  const image = await Jimp.read(img);
  // const { width, height } = image.bitmap;

  image
    // .crop(
    //   parseInt(width * 0.3),
    //   parseInt(height * 0.19),
    //   parseInt(width * 0.3),
    //   parseInt(height * 0.21)
    // )
    // .convolute(kernel)
    // .contrast(0.3)
    .write('output/processed.jpeg');

  return await image.getBufferAsync(Jimp.MIME_JPEG);
};

module.exports = processScoreSheet;

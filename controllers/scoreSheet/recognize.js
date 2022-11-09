const { processScoreSheet } = require('../../functions');

module.exports = async (req, res) => {
  const { image } = req.files;

  const processed = await processScoreSheet(image.data);

  return res.status(200).send(processed);
};

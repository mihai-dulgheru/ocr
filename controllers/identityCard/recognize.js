const { processIdentityCard, recognize, textToJson } = require('../../functions');

module.exports = async (req, res) => {
  const { image } = req.files;

  const processed = await processIdentityCard(image.data);
  const text = await recognize(processed);
  const json = textToJson(text);

  return res.status(200).send(json);
};

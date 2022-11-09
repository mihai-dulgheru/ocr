const processIdentityCard = require('./process-identity-card');
const processScoreSheet = require('./process-score-sheet');
const recognize = require('./recognize');
const textToJson = require('./text-to-json');

module.exports = {
  processIdentityCard,
  processScoreSheet,
  recognize,
  textToJson,
};

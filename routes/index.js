const identityCard = require('./identity-card');
const scoreSheet = require('./score-sheet.js');

module.exports = (router) => {
  router.use('/identity-card', identityCard);
  router.use('/score-sheet', scoreSheet);
};

const { Router } = require('express');
const { ScoreSheet } = require('../controllers');

const router = Router();
module.exports = router;

router.post('/recognize', ScoreSheet.recognize);

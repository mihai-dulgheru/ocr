const { IdentityCard } = require('../controllers');
const { Router } = require('express');

const router = Router();
module.exports = router;

router.post('/recognize', IdentityCard.recognize);

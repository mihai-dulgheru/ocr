const { Router } = require('express');

const router = Router();
module.exports = router;

require('./routes')(router);

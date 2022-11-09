require('express-async-errors');
const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const router = require('./router.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

app.use('/', router);

module.exports = app;

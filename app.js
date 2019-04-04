const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const router = require('./src/routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', router);

module.exports = app;

const express = require('express');

const apiRouter = require('./api-routes');

const app = express();

app.use('/api-routes', apiRouter);

module.exports = app;


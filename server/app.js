const express = require('express');

const indexRouter = require('./src/routes/index.routes')

const app = express();

const serverConfig = require('./src/middleware/serverConfig')

serverConfig(app);

app.use('/', indexRouter);

module.exports = app;
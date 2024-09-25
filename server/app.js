const express = require('express');

const indexRouter = require('./src/routes/index.routes')

const app = express();

const serverConfig = require('./src/middleware/serverConfig')
const sessionConfig = require('./src/middleware/sessionConfig')


serverConfig(app);
sessionConfig(app)

app.use('/', indexRouter);

module.exports = app;
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
// const userSession = require('./getUser');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(morgan('dev'));

  // app.use(userSession);
};

module.exports = serverConfig;

const express = require('express');
const pessoasRoute = require('./routes/pessoasRoute.js');

module.exports = (app) => {
  app.use(express.json(), pessoasRoute);
};

const express = require('express');
const path = require('path');
const indexRouter = express.Router();

indexRouter.get('/main', (req, res) => {
  return res.sendFile(path.resolve('public/html/main.html'));
});
indexRouter.get('/login', (req, res) => {
  return res.sendFile(path.resolve('public/html/login.html'));
});
indexRouter.get('/register', (req, res) => {
  return res.sendFile(path.resolve('public/html/register.html'));
});

module.exports = indexRouter;

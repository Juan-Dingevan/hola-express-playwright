const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundoooo!!');
});

module.exports = app;

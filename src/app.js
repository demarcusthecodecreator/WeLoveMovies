if (process.env.USER) require("dotenv").config();
const express = require("express");
const routes = require('./routes/index')

const app = express();
var cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/', routes)

app.get('*', (request, response) => {
  return response.status(404).json({ error: 'Not Found' });
});

module.exports = app;

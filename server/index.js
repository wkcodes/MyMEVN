// Dependencies
require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

const app = express();

// routes
app.use(routes);

// database 
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// listen
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

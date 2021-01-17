// Env 
require('dotenv').config();

// Express
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

// Routes
const routes = require('./routes');
app.use(routes);

// Mongoose 
const mongoose = require('mongoose');
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

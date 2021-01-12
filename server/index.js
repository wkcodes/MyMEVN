// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");

// Config
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database
const db = mongoose.connection;
db.once('open', () => console.log('Connected to databse!'));

// Middleware
app.use(bodyParser.json());
app.use(cors())

// Html route
app.use(express.static("../client"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// Api routes
app.use(require('./routes/api.js'));

// Listen
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

module.exports = db;
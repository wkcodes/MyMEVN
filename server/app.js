// Deps
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const expressSession = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(expressSession({secret: 'mySecretKey', resave: true, saveUninitialized: true}));
app.use(cors({ origin: process.env.PORT, credentials: true}));
app.use(cookieParser('mySecretKey'));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

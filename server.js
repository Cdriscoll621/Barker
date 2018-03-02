
// Dependencies

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies

// =============================================================
const express = require("express");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');


// Sets up the Express App
// =============================================================
const app = express();

const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
const db = require("./models");

//Authentication Router
//const authentication = require('./routes/authentication.js') (app);



// Sets up all dependecies
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

//For Passport
app.use(session({
  secret: 'anystringoftext',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// Load Passport Strategies
require('./config/passport.js') (passport, db.user);

//Authentication route
//app.use('/api/authentication', authentication);

// Static directory
app.use(express.static("public"));

//View Engine
//app.set('view engine', 'ejs')

// Routes
// =============================================================
require("./routes/api-routes.js")(app, passport);
const authRoute = require('./routes/authentication.js') ;
app.use('/', authRoute);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  console.log('Connected to Database');
  }).catch(function(err){
    console.log(err)
});
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
});

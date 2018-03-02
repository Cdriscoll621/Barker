const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const authController = require('../controllers/authcontroller.js');
 
module.exports = (app, passport) => {
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
 
    ));
 
 
 
}


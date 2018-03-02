const express = require('express');
const passport = require('passport');
const User = require('../models/user.js');
const authController = require('../controllers/authcontroller.js');
const router = express.Router();



router.get('/protected',  (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if (err) {
        // internal server error occurred
        return next(err);
      }
      if (!user) {
        // no JWT or user found
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
      if (user) {
  // authentication was successful! send user the secret code.
        return res
          .status(200)
          .json({ secret: '123' });
      }
    })(req, res, next);
  });


// POST to /register
router.post('/register', (req, res) => {
  console.log(req.body);  
  // Create a user object to save, using values from incoming JSON
    const newUser = new user({
      email: req.body.user_login
    //   firstName: req.body.,
    //   lastName: req.body.lastName,
    });
  
    // Save, via passport's "register" method, the user
    user.register(newUser, req.body.password, (err, user) => {
      // If there's a problem, send back a JSON object with the error
      if (err) {
        return res.send(JSON.stringify({ error: err }));
      }
      // Otherwise, for now, send back a JSON object with the new user's info
      return res.send(JSON.stringify(user));
    });
  });
  
module.exports= router;

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


const user = require('../models/user.js');

module.exports = (passport, user) => {


    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    passport.deserializeUser((id, done)=>{
        user.findById(id, (err, user)=>{
            done(err, user);
        });
    });


    passport.use('local-signup', new LocalStrategy ({
        usernameField: 'user_login',
        passwordField: 'user_passwd',
        passReqToCallback: true
        },
        (req, user_login, user_passwd, done)=>{
           // const {user_login, user_passwd} = req.body;
            console.log(req.body);
            bcrypt.hash(user_passwd, 10, (err, hash) =>{
                console.log(hash);
                process.nextTick(()=>{
                    db.user.findOne({
                        where: {
                            user_login: user_login
                        },
                    })
                    .then ((user) => {
                        if(user) {
                            return done(null, false, {
                                message: 'That email is already taken'
                            });
                        } 
                        else {
                            const userPassword = hash;
                            const userData = {
                                user_login: user_login,
                                user_passwd:  user_passwd
                        };
                        db.user.create(userData).then((newUser, created)=>{
                            if(!newUser) {
                                return done(null, false);
                            }
                            if (newUser) {
                                return done(null, newUser);
                            }
                        });    
                        } 
                    });
                });
            })
        }
    ))


    passport.use('local-login', new LocalStrategy({
            usernameField: 'user_login',
            passwordField: 'user_passwd',
            passReqToCallback: true
        },
        (req, user_login, user_passwd, done)=>{
            db.user.findOne({
                where: {
                    user_login: req.body.user_login
                }
            })
            .then((user)=>{
                const {user_login, user_passwd} = req.body;
                bcrypt.compare(req.body.user_passwd, user.user_passwd, (err, loginSuccess) => {
                    if(logingSuccess){
                        res.json({status: 'Passport local-login success'})
                    }
                    else{
                        res.json({status: 'Passport local-login failure'})
                    }
                })
            })
            
        })
    )

}

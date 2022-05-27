const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user_model');

module.exports = function(passport) {
    console.log('passsport config');
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {

            User.findOne({
                email: email
            }).then(user => {
                if (!user) {
                    return done(null, false, { message: 'Bu mail adresiyle eşleşen hesap bulunamadı' })
                }
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Şifre yanlış' })
                    }
                });
            });
        })
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};
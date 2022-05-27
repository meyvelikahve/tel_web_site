const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user_model')

const passport = require('passport')




router.get('/login_user', (req, res) => res.render('login_user'));

router.get('/create_user', (req, res) => {
    res.render('create_user')
})

router.post('/login_user', passport.authenticate(
    'local', {
        successRedirect: '/user_profile',
        failureRedirect: '/login_user',
        failureFlash: true
    }))

router.post('/create_user', async(req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                console.log('email daha önce kullanılmış');
                res.render('create_user')
            } else {
                const newUser = new User({
                    name: name,
                    email: email,
                    password: hashedPassword
                });

                newUser
                    .save()
                    .then(user => {

                        res.redirect('/login_user');
                    })
                    .catch(err => console.log(err));
            }
        })
})

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login_user');
    });
});


module.exports = {
    router: router,

}
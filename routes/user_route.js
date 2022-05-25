const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user_model')

const passport = require('passport')


const users = []

router.get('/login_user', (req, res) => {
    User.find().select('email')
        .then((result) => {

            console.log(result);
            res.render('login_user', { users: result })
        })
        .catch((err) => {
            console.log(err);
        })
})

router.post('/login_user', passport.authenticate(
    'local', {
        successRedirect: '/',
        failureRedirect: '/login_user',
        failureFlash: true
    }))

router.get('/create_user', (req, res) => {
    res.render('create_user')
})

router.post('/create_user', async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        user.save().then((result) => {
            res.send()
        }).catch((err) => console.log(err))
        users.push({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login_user')
    } catch (error) {
        res.redirect('/create_user')
    }
    //console.log(users);
})

module.exports = {
    router: router,
    users: users

}
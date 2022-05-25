const express = require('express')
const router = express.Router()
const Phone = require('../models/phone_model')


router.get('/phone_buy', (req, res) => {
    Phone.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('phone_buy', { phones: result })
        })
        .catch((err) => {
            console.log(err);
        })
})



router.get('/phone_sell', (req, res) => {
    res.render('phone_sell')
})

router.post('/phone_sell', (req, res) => {
    console.log(req.body);
})

module.exports = router
const express = require('express');
const router = express.Router();
const { ensureAuthenticated, } = require('../config/auth');

router.get('/', (req, res) => res.render('index'));

router.get('/user_profile', ensureAuthenticated, (req, res) =>
    res.render('user_profile', {
        user: req.user
    })
);

module.exports = router;
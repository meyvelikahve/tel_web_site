const User = require('../models/user_model')
const bcrypt = require('bcrypt')
const { name } = require('ejs')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
    })
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass
    })
    user.save()
        .then(user => {
            res.json({
                message: 'Başarıyla kayıt oldunuz'
            })
        })
        .catch(error => {
            res.json({
                message: 'hata alındı'
            })
        })
}

module.exports = {
    register
}
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const User = require('./models/user_model')
const Phone = require('./models/phone_model')

const app = express()

const dbURL = 'mongodb+srv://meyvelikahve:recep123@telsite.xkqq0.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000))
    .catch((err) => console.log(err))
app.set('view engine', 'ejs')



app.use(express.static('css'))
app.use(express.static('images'))

app.use((morgan('dev')))


app.get('/', (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { users: result })
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/create_user', (req, res) => {
    res.render('create_user')
})

app.get('/login_user', (req, res) => {
    res.render('login_user')
})

app.get('/phone_buy', (req, res) => {
    res.render('phone_buy')
})
app.get('/phone_sell', (req, res) => {
    res.render('phone_sell')
})

app.use((req, res) => {
    res.status(404).render('404')
})
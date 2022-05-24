if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const morgan = require('morgan')
const fileUpload = require('express-fileupload')
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const mongoose = require('mongoose')
const initializePassport = require('./passport-config')
const User = require('./models/user_model')
const users = []
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    // email => users.find
    // .then((result) => { console.log(result) })
    // .catch((err) => { console.log(err) })
)


const Phone = require('./models/phone_model')
const { render } = require('express/lib/response')



const app = express()

const dbURL = process.env.DATABASE_URL
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000))
    .catch((err) => console.log(err))

app.use(fileUpload())
app.set('view engine', 'ejs')



app.use(express.static('css'))
app.use(express.static('images'))
app.use(express.urlencoded({ extended: true }))
app.use((morgan('dev')))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


app.get('/', (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { users: result })
        })
        .catch((err) => {
            console.log(err);
        })
})


app.get('/login_user', (req, res) => {
    res.render('login_user')
})

app.post('/login_user', passport.authenticate(
    'local', {
        successRedirect: '/',
        failureRedirect: '/login_user',
        failureFlash: true
    }))

app.get('/create_user', (req, res) => {
    res.render('create_user')
})

app.post('/create_user', async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
            // const user = User({
            //     name: req.body.name,
            //     email: req.body.email,
            //     password: hashedPassword
            // })
            // user.save().then((result) => {
            //         res.send()
            //     }).catch((err) => console.log(err))
        users.push({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login_user')
    } catch (error) {
        res.redirect('/create_user')
    }
    console.log(users);
})


app.get('/phone_buy', (req, res) => {
    Phone.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('phone_buy', { phones: result })
        })
        .catch((err) => {
            console.log(err);
        })
})



app.get('/phone_sell', (req, res) => {
    res.render('phone_sell')
})

app.post('/phone_sell', (req, res) => {
    console.log(req.body);
})

app.get('/phone_sell_test', (req, res) => {
    res.render('phone_sell_test')
})

app.post('/phone_sell_test', (req, res) => {
    console.log(req.body);
})

app.use((req, res) => {
    res.status(404).render('404')
})
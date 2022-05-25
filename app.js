if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const morgan = require('morgan')
const fileUpload = require('express-fileupload')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const mongoose = require('mongoose')
const initializePassport = require('./passport-config')
const User = require('./models/user_model')

const userRoutes = require('./routes/user_route')
const phoneRoutes = require('./routes/phone_route')
const users = userRoutes.users


initializePassport(
    passport,
    email => users.find(user => user.email === email),
    // email => users.find
    // .then((result) => { console.log(result) })
    // .catch((err) => { console.log(err) })
)


const Phone = require('./models/phone_model')
const { render } = require('express/lib/response')
const { db } = require('./models/user_model')
const { result } = require('lodash')



const app = express()

const dbURL = process.env.DATABASE_URL

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        app.listen(3000)
    })
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

app.use(userRoutes.router)

app.use(phoneRoutes)


app.use((req, res) => {
    res.status(404).render('404')
})
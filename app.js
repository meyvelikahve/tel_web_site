if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const morgan = require('morgan')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const mongoose = require('mongoose')


const userRoutes = require('./routes/user_route')
const phoneRoutes = require('./routes/phone_route')
const indexRoutes = require('./routes/index.js')


require('./config/passport')(passport);

const app = express()

const dbURL = process.env.DATABASE_URL


mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        app.listen(3000)
    })
    .catch((err) => console.log(err))


app.set('view engine', 'ejs')
app.use(express.static('public'))

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


app.use(indexRoutes)
app.use(userRoutes.router)
app.use(phoneRoutes)




app.use((req, res) => {
    res.status(404).render('404')
})
//const { authenticate } = require('passport/lib')

const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')


function initialize(passport, getUserByEmail) {
    const authenticateUser = async(email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, { message: 'Bu mail adresiyle eşleşen hesap bulunamadı' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Şifre yanlış' })
            }
        } catch (error) {
            return done(error)

        }
    }
    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
    passport.serializeUser((user, done) => {})
    passport.serializeUser((id, done) => {})
}

module.exports = initialize
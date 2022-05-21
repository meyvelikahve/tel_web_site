const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhoneSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    phonenumber: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    capacity: {
        type: String,
        require: true
    },
    detail: {
        type: String,
        require: true
    },
    //image



}, { timestamps: true })

const Phone = mongoose.model('Phone', PhoneSchema)
module.exports = Phone
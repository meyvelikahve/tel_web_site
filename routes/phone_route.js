const express = require("express");
const router = express.Router();
const multer = require("multer")

const Phone = require("../models/phone_model");
const { ensureAuthenticated } = require('../config/auth');

const storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, './public/images/upload');
    },

    //add back the extension
    filename: function(request, file, callback) {
        callback(null, Date.now() + file.originalname);
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
});

router.get("/phone_buy", (req, res) => {
    Phone.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("phone_buy", { phones: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/phone_sell", ensureAuthenticated, (req, res) => {
    res.render("phone_sell");
});

router.post("/phone_sell", upload.single('post_image'), (req, res) => {

    console.log(req.file);
    res.redirect("/phone_buy");
    const phone = new Phone({
        name: req.body.name,
        lastname: req.body.lastname,
        phonenumber: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        brand: req.body.brand,
        model: req.body.model,
        capacity: req.body.capacity,
        color: req.body.color,
        price: req.body.price,
        detail: req.body.detail,
        img: req.file.filename

    });
    try {

        Phone.create(phone, (err, item) => {
            if (err) {
                console.log(err);
            } else {
                phone
                    .save()
                    .then((result) => {
                        console.log('Telefon eklendi');
                        res.send();
                    })
                    .catch((err) => console.log(err));
            }
        });


        res.redirect("/phone_buy");
    } catch (error) {
        res.redirect("/phone_sell");
    }
});


module.exports = router;
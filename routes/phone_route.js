const express = require("express");
const router = express.Router();
const Phone = require("../models/phone_model");
const multer = require("multer");
var fs = require('fs');
var path = require('path');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

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

router.get("/phone_sell", (req, res) => {
  res.render("phone_sell");
});

router.post("/phone_sell",upload.single('myImage'), (req, res) => {
  try {
    const phone = new Phone({
      name: req.body.name,
      lastname: req.body.lastname,
      phonenumber: req.body.phone,
      address: req.body.address,
      city: "Kütahya",
      brand: "iPhone",
      model: req.body.model,
      capacity: "64",
      color: "grey",
      price: 9000,
      img: {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/png'
    }
    });
    Phone.create(phone, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            phone
      .save()
      .then((result) => {
        res.send();
      })
      .catch((err) => console.log(err));
        }
    });
    
    res.redirect("/phone_buy");
  } catch (error) {
    res.redirect("/phone_sell");
  }
  //console.log(users);
});

module.exports = router;

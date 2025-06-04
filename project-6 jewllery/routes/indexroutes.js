const express = require('express');
const route = express.Router();
const multer = require('multer');
const path = require('path');
const jwelleryController = require('../controllers/jwellerycontroller');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

route.get('/', jwelleryController.homepage);
route.get('/add', jwelleryController.RenderForm);
route.post('/', upload.single('image'), jwelleryController.insertJwellery);

module.exports = route;

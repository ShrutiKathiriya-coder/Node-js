const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads')); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Routes
router.get('/', movieController.homepage);
router.get('/add', movieController.RenderForm);
router.post('/', upload.single('Image'), movieController.Insertmovie);
router.get('/edit/:id', movieController.Updatemovie);
router.post('/edit/:id', upload.single('Image'), movieController.Editmovie); 
router.get('/delete/:id', movieController.Deletemovie);
module.exports = router;

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const artworkController = require('../controllers/artworkController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get('/', artworkController.getAllArtworks);
router.get('/add', artworkController.getaddForm);
router.post('/', upload.single('art_image'), artworkController.createArtwork);
router.get('/edit/:id', artworkController.getEditForm);
router.post('/edit/:id', upload.single('art_image'), artworkController.updateArtwork);
router.post('/delete/:id', artworkController.deleteArtwork);

module.exports = router;
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
router.get('/', artworkController.homepage);
router.get('/add', artworkController.RenderForm);
router.post('/', upload.single('art_image'), artworkController.insertArtwork);
router.get('/edit/:id', artworkController.UpdateArtwork);
router.post('/edit/:id', upload.single('art_image'), artworkController.EditArtwork);
router.post('/delete/:id', artworkController.DeleteArtwork);


module.exports = router;
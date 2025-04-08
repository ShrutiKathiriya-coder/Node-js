const Artwork = require('../models/Artwork');
const fs = require('fs');
const path = require('path');

exports.getAllArtworks = async (req, res) => {
  const artworks = await Artwork.find();
  res.render('index', { artworks });
};

exports.getaddForm = (req, res) => {
  res.render('add');
};

exports.createArtwork = async (req, res) => {
  const { art_title, artist_name, creation_year, art_type } = req.body;
  const art_image = req.file ? req.file.filename : '';
  await Artwork.create({ art_title, artist_name, creation_year, art_type, art_image });
  res.redirect('/');
};

exports.getEditForm = async (req, res) => {
  const artwork = await Artwork.findById(req.params.id);
  res.render('edit', { artwork });
};

exports.updateArtwork = async (req, res) => {
  const { art_title, artist_name, creation_year, art_type } = req.body;
  const art_image = req.file ? req.file.filename : undefined;
  const updateData = { art_title, artist_name, creation_year, art_type };
  if (art_image) updateData.art_image = art_image;
  await Artwork.findByIdAndUpdate(req.params.id, updateData);
  res.redirect('/');
};

exports.deleteArtwork = async (req, res) => {
    try {
      const artwork = await Artwork.findById(req.params.id);
  
      if (artwork && artwork.art_image) {
        const imagePath = path.join(__dirname, '../uploads', artwork.art_image);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
  
      await Artwork.findByIdAndDelete(req.params.id);
      res.redirect('/');
    } catch (err) {
      console.error('Error deleting artwork:', err);
      res.status(500).send('Server error');
    }
  };

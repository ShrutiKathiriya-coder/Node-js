const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  art_title: String,
  artist_name: String,
  creation_year: Number,
  art_type: String,
  art_image: String,
});

module.exports = mongoose.model('Artwork', artworkSchema);
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  description: String,
  director: String,
  releaseDate: Date,
  rating: Number,
  poster: String
});

module.exports = mongoose.model('Movie', movieSchema);
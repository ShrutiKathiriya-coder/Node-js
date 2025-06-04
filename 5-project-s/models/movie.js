const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movie_title: {
    type: String,
    required: true
  },
  movie_type: {
    type: String,
    required: true
  },
  releaseyear: {
    type: Number,
    required: true
  },
  director:{
    type:String,
    require:true
  },
  Discription:{
    type:String,
    require:true
  },
  rating:{
    type:Number,
    require:true
  },
  Image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('movies', movieSchema);

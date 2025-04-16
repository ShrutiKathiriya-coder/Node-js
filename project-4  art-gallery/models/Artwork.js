const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  art_title: {
    name:string,
    require:true,
  },
   artist_name: {
    name:string,
    require:true,
  },
   creation_year: {
    name:number,
    require:true,
  },
   art_type: {
    name:string,
    require:true,
  },
   art_image: {
    name:string,
    require:true,
  }

module.exports = mongoose.model('Artwork', artworkSchema);

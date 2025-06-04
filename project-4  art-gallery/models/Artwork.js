const mongoose = require('mongoose');
const path = require('path');

const artSchema = new mongoose.Schema({
  art_title: {
        type: String,
        required: true
    },
    artist_name:
    {
        type: String,
        required: true
    },
    creation_year:{
        type : Number,
        required : true, 
    },
    art_type:{
        type : String,
        required : true, 
    },
    art_image : {
        type : String,
        required : true ,
    }
});
module.exports = mongoose.model('art', artSchema);

const mongoose = require("mongoose");

const jwellerySchema =  mongoose.Schema({
    jwelleryname:{
        type:String,
        required:true,
    },
    jweleryprice:{
        type:Number,
        required:true,
    },
    designname :{
        type:String,
        required:true,
    },
    colors:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },

})

const jweleryModel = mongoose.model("jwellerydata", jwellerySchema);

module.exports = jweleryModel;

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
        type:string,
        required:true,
    },
    colors:{
        type:string,
        required:true,
    },
    image:{
        type:string,
        required:trusted
    },

})

const jweleryModel = mongoose.model("jwellerydata", jwellerySchema);

module.exports = jweleryModel;
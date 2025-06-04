const mongoose=require('mongoose');

const AdminSchema=new mongoose.Schema({
     fname:{
        type:String,
        required:true
     },
     lname:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
     hobby:{
      type : Array,
      required : true
     },
     gender:{
        type:String,
        required:true
     },
     city:{
        type:String,
        required:true
     },
     image:{
      type:String,
      required:true
     },
     desc : {
      type:String,
      required:true
     }
})

module.exports=mongoose.model('admin-panel',AdminSchema)
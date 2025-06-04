
const express= require('express');
const db=require('./config/db');
const indexroutes = require('./routes/indexroutes');
const mongoose = require('mongoose');
const multer = require('multer');
const path=require('path');
 const app = express();
 const port = 7000;

 app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/', indexroutes);


app.listen(port,(err)=>{
    if(err){
        console.log("error",err);
        return false;
    }
    console.log("started");
    
})

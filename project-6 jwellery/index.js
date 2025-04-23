const express= require('express');
const db=require('./config/db');
const route=require('./routes/index');
 const path=require('path');
 const app = express();
 const port = 7000;
 const model=require('./models/jwellery')

 
 app.set('view engine','ejs');

 app.get('/',homepage);

app.listen(port,(err)=>{
    if(err){
        console.log("error",err);
        return false;
    }
    console.log("started");
    
})
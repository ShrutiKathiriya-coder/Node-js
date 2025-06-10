const express =require('express');
const  db=require('./config/db')
const app=express();

const port=3000;

app.use(express.urlencoded({extended:true}));

//route
app.use('/', require("./routes/index"));
app.listen(port,(err)=>{
    if(err){
        console.log("error",err);
        return false;
    };
    console.log("server is started😊");
    
})
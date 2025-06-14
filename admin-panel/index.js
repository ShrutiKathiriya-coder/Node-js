const express = require('express');
const db = require('./config/db');
const cookieParser = require('cookie-parser');
const flash=require('connect-flash');
const app=express();
const port=2000;


app.set('view engine','ejs');


app.use(express.static(__dirname + '/public'));
app.use('/uploads',express.static(__dirname +'/uploads'));


app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use('/',require('./routes/adminroute'))

app.listen(port,()=>{
    console.log("server started..😎"); 
});
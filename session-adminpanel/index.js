const express = require('express');
const db = require('./config/db');
const cookieParser = require('cookie-parser');
const passport = require("passport");
const flash=require('connect-flash');
const session = require('express-session');
const localStrategy = require("./middleware/localStrategy");
const app=express();
const port=2000;


app.set('view engine','ejs');


app.use(express.static(__dirname + '/public'));
app.use('/uploads',express.static(__dirname +'/uploads'));

app.use(session({
    secret: 'shr@05',
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(flash());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.currentAdmin);

app.use('/',require('./routes/adminroute'))

app.listen(port,()=>{
    console.log("server started..😎"); 
});
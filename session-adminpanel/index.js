const express = require('express');
const db = require('./config/db');
const cookieParser = require('cookie-parser');
const passport = require("passport");
const session = require('express-session');
const flash=require('connect-flash');
const LocalStrategy = require('./config/passportLocalStrategy');

const app=express();
const port=2000;


app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));
app.use('/uploads',express.static(__dirname +'/uploads'));
app.use(cookieParser());

app.use(session({
    secret: 'shr@05',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 5000000, 
    },
}));
app.use(flash());

app.use(express.urlencoded({ extended: true }));


// app.use(passport.initialize());
// app.use(passport.session());
// app.use(passport.currentAdmin);

app.use('/',require('./routes/adminroute'))

app.listen(port,()=>{
    console.log("server started..😎"); 
});
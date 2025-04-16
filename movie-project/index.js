const express = require('express');
const db = require('./config/db');
const multer = require("multer");
const app = express();
const path = require('path');
const port = 9000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended : true}));
app.use('/images', express.static(path.join(__dirname , 'images')));

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/uploads', express.static(__dirname+"/uploads"));

app.use('/', require('./routes/movieRoutes'));

app.listen(port, (err) => {
  if (err) {
      console.log("Server is not started...", err);
      return false;
  } 
  console.log("Server is started..");
});
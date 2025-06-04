const express = require('express');
const db = require('./config/db'); 
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const artworkRoutes = require('./routes/artworkRoutes');
const PORT = 7000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', artworkRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

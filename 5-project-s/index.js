const express = require('express');
const path = require('path');
const movieRoutes = require('./routes/movieRoutes');
const db = require('./config/db');

const port=3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.set('view engine', 'ejs');

app.use('/', movieRoutes);

app.listen(port, () => {
    console.log('Server running ');
});

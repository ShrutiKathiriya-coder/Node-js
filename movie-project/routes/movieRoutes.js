const express = require('express');
const multer = require('multer');
const route = express.Router();
const movieController = require('../controllers/moviecontroller');


const stroage = multer.diskStorage({
    destination : (req, file,cb) => {
        cb(null, "uploads/");
    },
    filename : (req, file, cb) => {
        cb(null, Date.now()+file.originalname)
    }
});

const upload = multer({storage: stroage});
console.log("Routing...");

route.get('/', movieController.getAllMovies);
route.get('/add', movieController.addMovieForm);
route.post('/add', movieController.createMovie);
route.get('/edit/:id', movieController.editMovieForm);
route.post('/edit/:id', movieController.updateMovie);
route.get('/delete/:id', movieController.deleteMovie);

module.exports = route;

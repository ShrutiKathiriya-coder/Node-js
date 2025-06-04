const fs = require('fs');
const path = require('path');
const movie = require('../models/movie');

// Home page
const homepage = async (req, res) => {
    const data = await movie.find(); 
    res.render('index', { data }); 
};

// Show form to add movie
const RenderForm = (req, res) => {
    res.render('add');
};

// Insert new movie
const Insertmovie = async (req, res) => {
    console.log("Inserting movie...");
    console.log("Body:", req.body);
    console.log("File:", req.file);

    if (req.file) {
        req.body.Image = req.file.filename;
    }

    try {
        await movie.create(req.body);
        console.log("Movie added successfully!");
        res.redirect('/');
    } catch (error) {
        console.error("Error inserting movie:", error);
        res.send('Error adding movie: ' + error.message);
    }
};

// Show edit form
const Updatemovie = async (req, res) => {
    const id = req.params.id;
    const updatemovie = await movie.findById(id);
    res.render('edit', { updatemovie });
};

// Save updated movie
const Editmovie = async (req, res) => {
    const id = req.params.id;
    const existingmovie = await movie.findById(id);

    if (req.file) {
        // Delete old image if exists
        if (existingmovie.Image) {
            const imagePath = path.join(__dirname, '../uploads', existingmovie.Image);
            fs.unlinkSync(imagePath);
        }
        req.body.Image = req.file.filename;
    } else {
        req.body.Image = existingmovie.Image;
    }

    await movie.findByIdAndUpdate(id, req.body);
    res.redirect('/');
};


//delete movie
const Deletemovie = async (req, res) => {
    const id = req.params.id;
    try {
        const deletemovie = await movie.findById(id);
        
        if (!deletemovie) {
            return res.send('Movie not found');
        }
        console.log("Deleting movie:", deletemovie);
        if (deletemovie.Image) {
            const imagePath = path.join(__dirname, '../uploads', deletemovie.Image);
            console.log("Image path:", imagePath);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
                console.log("Image deleted");
            } else {
                console.log("Image file not found at path:", imagePath);
            }
        }
        await movie.findByIdAndDelete(id);
        console.log("Movie deleted from database");

        res.redirect('/');
    } catch (error) {
        console.error("Error deleting movie:", error);
        res.send('Server Error: ' + error.message);
    }
};


module.exports = {
    homepage,
    RenderForm,
    Insertmovie,
    Updatemovie,
    Editmovie,
    Deletemovie
};

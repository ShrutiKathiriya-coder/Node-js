const Artwork = require('../models/Artwork');
const { unlinkSync } = require('fs');
const path = require('path');

// Home page
const homepage = async (req, res) => {
    const artworks = await Artwork.find();
    res.render('index', { artworks });
};

// Show form to add artwork
const RenderForm = async (req, res) => {
    res.render('add');
};

// Insert new artwork
const insertArtwork = async (req, res) => {
  
        console.log("Inserting artwork...");
        console.log("Data received:", req.body);

        if (req.file) {
            req.body.art_image = req.file.filename;
        }

        await Artwork.create(req.body);
        console.log("Artwork added successfully!");
        res.redirect('/');
};

// Show edit form
const UpdateArtwork = async (req, res) => {
    const id = req.params.id;
    const artwork = await Artwork.findById(id);
    res.render('edit', { artwork });
};

// Save updated artwork
const EditArtwork = async (req, res) => {
    const id = req.params.id;
    const existingArtwork = await Artwork.findById(id);
        if (req.file) {
            // Delete old image if exists
            if (existingArtwork.art_image) {
                const imagePath = path.join(__dirname, '../uploads', existingArtwork.art_image);
                unlinkSync(imagePath);
            }

            req.body.art_image = req.file.filename;
        } else {
            req.body.art_image = existingArtwork.art_image;
        }

        await Artwork.findByIdAndUpdate(id, req.body);
        res.redirect('/');
};

// Delete artwork
const DeleteArtwork = async (req, res) => {
    const id = req.params.id;
    const artwork = await Artwork.findById(id);

    try {
        if (artwork && artwork.art_image) {
            const imagePath = path.join(__dirname, '../uploads', artwork.art_image);
            unlinkSync(imagePath);
        }

        await Artwork.findByIdAndDelete(id);
        res.redirect('/');
    } catch (error) {
        console.error("Error deleting artwork:", error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    homepage,
    RenderForm,
    insertArtwork,
    UpdateArtwork,
    EditArtwork,
    DeleteArtwork
};

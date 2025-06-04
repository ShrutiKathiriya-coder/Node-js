const path = require('path');
const  fs  = require('fs');
const jwellery = require('../models/jwellery'); 

const homepage = async (req, res) => {
    const data = await jwellery.find();
    res.render('homepage', { data });
};

const RenderForm = async (req, res) => {
    res.render('add');
};

const insertJwellery = async (req, res) => {
    console.log("Inserting jwellery...");
    console.log("Data received:", req.body);

    if (req.file) {
        req.body.image = req.file.filename;
    }

    await jwellery.create(req.body);
    console.log("Jwellery added successfully!");
    res.redirect('/');
};


module.exports = {
    homepage,
    RenderForm,
    insertJwellery,
    
};

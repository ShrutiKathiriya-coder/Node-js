
const express = require('express');

const route = express.Router();

console.log("Routing");
const postController = require('../controllers/postcontrollers');


route.get('/', postController.postPage);
route.get('/about', postController.aboutPage);
route.get('/contact', postController.contactPage);

route.use('/employee', require('./employee'));

module.exports = route;


const express = require('express');

const route = express.Router();


const empCTR = require('../controllers/empcontrollers');

route.get('/', empCTR.empPage);

route.post('/addEMP', empCTR.insertEMP);

module.exports = route;
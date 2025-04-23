const express=require('express');
const controller=require('../controllers/jwellerycontroller')
const route=express.Router();

console.log("routing");

route.get('/',homepage)

module.exports=route;

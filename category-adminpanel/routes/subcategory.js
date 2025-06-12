const express = require("express");

const route = express.Router();

const {addSubcategoryPage,insertsubcategory}=require("../controllers/subcategorycontroller")

// Add SubCategory Page
route.get("/addsubcategorypage", addSubcategoryPage);

// Insert SubCategory
route.post("/insertsubcategory", insertsubcategory);

module.exports = route;
const model =require('../models/categorymodel');
const subcategory=require("../models/subcategory");

// Add SubCategory Page
const addSubcategoryPage = async (req, res) => {
  try {
    const allCategory = await category.find({});

    res.render("subcategory/addsubcategoryPage", {
      allCategory: allCategory,
      success: req.flash("success"),
      error: req.flash("error"),
    });
  } catch (e) {
    console.log(e);
    res.redirect("/back");
  }
};


// Insert SubCategory
const insertsubcategory = async (req, res) => {
  console.log(req.body);

  try {
    const insert = await subcategory.create(req.body);

    if (insert) {
      req.flash("success", "Subcategory inserted...");
    } else {
      req.flash("error", "Subcategory insertion falied...");
    }

    res.redirect("/subcategory/addsubcateorypage");
  } catch (e) {
    console.log(e);
    req.flash("error", `Exception ${e}`);
    res.redirect("/subcategory/addsubcateorypage");
  }
};

module.exports = {
  addSubcategoryPage,
  insertsubcategory
};
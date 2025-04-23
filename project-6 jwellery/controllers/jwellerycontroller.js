const  models = require("mongoose");

const homepage=(req,res)=>{
    res.render('homepage')
};
const adddata=(req,res)=>{
    res.render('add')
}
models.export={
    homepage,
    adddata,
}
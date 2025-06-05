const mongoose = require('mongoose');

const url="mongodb://127.0.0.1:27017/session-crud";

mongoose.connect(url);
const db = mongoose.connection

db.on('connected' , ()=>{
    console.log("db is contencted");
})

db.on('error' , ()=>{
    console.log("db is not contencted");
})

db.on('disconnection' , ()=>{
    console.log("db is discontencted");
})

module.exports = db;
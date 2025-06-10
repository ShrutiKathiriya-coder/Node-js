const express=require("express");

const route=express.Router();

console.log("routing");

const { fetchUser, insertUser,updateuser,deleteuser } = require("../controllers/usercontroller");

//allusers add
route.get("/users", fetchUser);
route.post("/users", insertUser)

//update user
route.patch('/users/:id',updateuser)

//delete user
route.delete('/users/:id',deleteuser)
module.exports = route;
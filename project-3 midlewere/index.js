const express = require('express');
const path = require("path");


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/',express.static('public'));

//index route
app.get("/",(req,res)=>{
  res.render("index");
 })


//user route
app.get('/user',(req,res)=>{
  res.render('user');
})

//analytics route
app.get("/analytics",(req,res)=>{
  res.render("analytics")
})

//chat route
app.get("/chat",(req,res)=>{
  res.render("chat")
})

//contact route
app.get("/contact",(req,res)=>{
  res.render("contact")
})

//team route

app.get("/team",(req,res)=>{
  res.render("team")
})

//calender route

app.get("/calender",(req,res)=>{
  res.render("calender")
})
//alert route
app.get("/alert",(req,res)=>{
  res.render("alert")
})
//badge route


app.get("/badge",(req,res)=>{
  res.render("badge")
})
// /material-icon

app.get("/material"),(req,res)=>{
  res.render("material")
}



app.listen(port, () => console.log("server is started😎"));
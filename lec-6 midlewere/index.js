const express = require('express');
const app= express();

const path = require('path'); //path attetch krne ke liye
const port = 8000;

// app.use(middleware);

app.listen(port,()=>console.log("server is started!!😎"));
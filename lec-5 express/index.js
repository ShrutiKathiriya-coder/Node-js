const fs = require("fs");
const port = 9000;
const http= require("http")
var myServer=http.createServer((req,res)=>{
    console.log("New Request and Response");

    const page = req.url;
    console.log("URL", req.url);

    let fileName = "";

    switch (page) {
        case '/':
            fileName = "home.html";
            break;
        case '/about':
            fileName = "about.html";
            break;
        // case '/contact':
        //     fileName = "contact.html";
        //     break;
        default:
            fileName = "error.html";
    }

    fs.readFile(fileName, (err, result) => {
        res.end(result);
    })

})

myServer.listen(port, () => console.log("Server Started !!"));
const express= require('express');

const app = express();
const port = 8000;

let studdata =[
    {
        name: "shruti",
        age: 20,
        email: "shruti@gmail.com",
        phone: "235690550",
        password: "shruti@124"
    },
    {
        name: "shruti",
        age: 20,
        email: "shruti@gmail.com",
        phone: "235690550",
        password: "shruti@124"
    },
    {
        name: "shruti",
        age: 20,
        email: "shruti@gmail.com",
        phone: "235690550",
        password: "shruti@124"
    },
];
app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", (req, res) => {
    let name = "shruti";
    res.render("table", { name, studdata })
})

app.get('/insert', (req, res) => {
    res.render("form");
})

app.post("/addStud", (req, res) => {
    console.log("Request Data : ", req.body);

    const obj = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    }

    studdata.push(obj);

    res.redirect("/insert");
})
app.listen(port, () => {
    console.log("Server is Started !! 😁");
})

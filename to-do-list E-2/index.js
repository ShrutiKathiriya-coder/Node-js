const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"    )));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let tasks = [];

// Route: Show To-Do List
app.get("/", (req, res) => {
    res.render("index", { tasks });
});

// Route: Add Task
app.post("/add", (req, res) => {
    const task = req.body.task;
    if (task) {
        tasks.push({ id: Date.now(), text: task });
    }
    res.redirect("/");
});

// Route: Delete Task
app.post("/delete/:id", (req, res) => {
    tasks = tasks.filter(task => task.id !== Number(req.params.id));
    res.redirect("/");
});

// Start Server
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});

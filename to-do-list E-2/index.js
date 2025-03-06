const express = require("express");
const path = require("path");

const app = express();
const port = 4000;

let tasks = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { tasks });
});

// Add Task (Always added to "Current")
app.post("/insertData", (req, res) => {
    const { task, date } = req.body;
    if (task) {
        tasks.push({ task, date, status: "Current" });
    }
    res.redirect("/");
});

// Delete Task
app.get("/delete", (req, res) => {
    tasks.splice(req.query.index, 1);
    res.redirect("/");
});

// Move Task to Completed
app.get("/complete", (req, res) => {
    const index = req.query.index;
    if (tasks[index] && tasks[index].status === "Current") {
        tasks[index].status = "Completed";
    }
    res.redirect("/");
});

app.get("/moveToCurrent", (req, res) => {
    const index = req.query.index;
    if (tasks[index] && tasks[index].status === "Completed") {
        tasks[index].status = "Current";
    }
    res.redirect("/");
});

app.listen(port, () => console.log(`Server running on port ${port}`));

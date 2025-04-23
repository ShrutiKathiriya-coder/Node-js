const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/crud-jwelery";

mongoose.connect(url);

const db = mongoose.connection;

console.log("routing");

db.on("connected", () => {
    console.log("db is connected");
});
db.on("error", (err) => {
    console.log("error", err);
})
db.on("disconnected", () => {
    console.log("db is disconnectd");
});

module.exports = db;
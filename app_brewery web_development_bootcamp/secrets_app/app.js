const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.route("/").get((req, res) => {
    res.render("home");
});
app.route("/login").get((req, res) => {
    res.render("login");
});
app.route("/register").get((req, res) => {
    res.render("register");
});

// listener
app.listen(3000, () => {
    console.log("server started on port 3000");
});

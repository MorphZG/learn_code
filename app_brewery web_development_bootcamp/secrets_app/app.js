import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

import ejs from "ejs";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

const saltRounds = 10;

// -----------------------
// database configuration
// -----------------------
mongoose.connect("mongodb://localhost:27017/secretTutorial");

const userSchema = new mongoose.Schema({ email: String, password: String });

const User = new mongoose.model("User", userSchema);

// ----------------
// route handlers
// ----------------
app.route("/").get((req, res) => {
    res.render("home");
});
app.route("/login")
    .get((req, res) => {
        res.render("login");
    })
    .post(async (req, res) => {});

app.route("/register")
    .get((req, res) => {
        res.render("register");
    })
    .post(async (req, res) => {});

// listener
app.listen(3000, () => {
    console.log("server started on port 3000");
});

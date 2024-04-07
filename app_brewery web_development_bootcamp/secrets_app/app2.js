// utilize bcrypt for hashing
// "manual" authentication

import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt";

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
    .post(async (req, res) => {
        try {
            let foundUser = await User.findOne({ email: req.body.username });
            if (foundUser) {
                let comparisonResult = await bcrypt.compare(
                    req.body.password,
                    foundUser.password
                );
                if (comparisonResult) {
                    console.log("Password is correct!");
                    res.render("secrets");
                } else {
                    console.log("Wrong password!");
                    res.redirect("/login");
                }
            } else {
                console.log("No such user in a database!");
                res.redirect("/login");
            }
        } catch (err) {
            console.log(err);
            res.send();
        }
    });

app.route("/register")
    .get((req, res) => {
        res.render("register");
    })
    .post(async (req, res) => {
        let salt = await bcrypt.genSalt(saltRounds);
        let hash = await bcrypt.hash(req.body.password, salt);

        let newUser = new User({
            email: req.body.username,
            password: hash,
        });

        try {
            // TODO check if user is already in a database, save() if not
            await newUser.save();
            res.render("secrets");
            // TODO else redirect("/login")
        } catch (err) {
            console.log(err);
            res.send();
        }
    });

// listener
app.listen(3000, () => {
    console.log("server started on port 3000");
});

/*
passport.js, cookies and sessions
passport-local-mongoose simplifes passport interaction with mongoose
set mongoose UserSchema.plugin(passport-local-mongoose) than create a model
simplify database interaction by automate find, save.... database actions
*/

import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";

const app = express();

// ------------
// middleware
// ------------
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: process.env.SECRET_STRING,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// -----------------------
// mongoose data model
// -----------------------
mongoose.connect("mongodb://localhost:27017/secretTutorial");

const userSchema = new mongoose.Schema({ username: String, password: String });
userSchema.plugin(passportLocalMongoose);
// Passport-Local Mongoose adds new methods to Schema. See the API Documentation
// adds additional fields: username, salt, hash

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ----------------
// route handlers
// ----------------
app.route("/").get((req, res) => {
    if (req.isAuthenticated()) {
        res.render("secrets");
    } else {
        res.render("home");
    }
});

app.route("/login")
    .get((req, res) => {
        res.render("login");
    })
    .post((req, res) => {
        const user = new User({
            username: req.body.username,
            password: req.body.password,
        });
        req.login(user, (err) => {
            if (!err) {
                let authenticate = passport.authenticate("local");
                authenticate(req, res, () => {
                    res.redirect("/secrets");
                });
            } else {
                console.log(err);
                res.redirect("/login");
            }
        });
    });

app.route("/register")
    .get((req, res) => {
        res.render("register");
    })

    .post((req, res) => {
        // User.register(user, password, cb) Convenience method to register a new user instance with a given password.
        User.register(
            { username: req.body.username },
            req.body.password,
            (err, user) => {
                if (!err) {
                    let authenticate = passport.authenticate("local");
                    authenticate(req, res, () => {
                        res.redirect("/secrets");
                    });
                } else {
                    console.log(err);
                    res.redirect("/register");
                }
            }
        );
    });

app.route("/secrets").get((req, res) => {
    if (req.isAuthenticated()) {
        res.render("secrets");
    } else {
        res.redirect("/login");
    }
});

app.route("/logout").get((req, res) => {
    req.logout;
    res.redirect("/");
});

// listener
app.listen(3000, () => {
    console.log("server started on port 3000");
});

import express from "express";
import mongoose from "mongoose";
import encrypt from "mongoose-encryption";
import "dotenv/config";
import ejs from "ejs";
import md5 from "md5";
import bcrypt from "bcrypt";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

const encriptionString = process.env.SECRET_KEY;
const saltRounds = 10; // 384 ---- 14:00

// -----------------------
// database configuration
// -----------------------
mongoose.connect("mongodb://localhost:27017/secretTutorial");

const userSchema = new mongoose.Schema({ email: String, password: String });

/*
userSchema.plugin(encrypt, {
    secret: encriptionString,
    encryptedFields: ["password"],
});
*/

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
                if (foundUser.password == md5(req.body.password)) {
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
        let newUser = new User({
            email: req.body.username,
            password: md5(req.body.password),
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

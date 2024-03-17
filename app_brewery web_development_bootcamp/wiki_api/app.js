const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// -----------------------
// database configuration
// -----------------------
mongoose.connect("mongodb://localhost:27017/wikiTutorial");
// document schema
const articles = { title: String, content: String };
// model
const Article = mongoose.model("Article", articles);

//--------------------
// route handlers
//--------------------

app.route("/articles")

    .get(async (req, res) => {
        try {
            let foundArticles = await Article.find({});
            res.send(foundArticles);
            console.log("Articles found!");
        } catch (err) {
            console.log(err);
        }
    })

    .post(async (req, res) => {
        let newArticle = new Article({
            title: req.body.title,
            content: req.body.content,
        });
        try {
            await newArticle.save();
            res.send(newArticle);
            console.log("Article saved!");
        } catch (err) {
            console.log(err);
        }
    })

    .delete(async (req, res) => {
        try {
            await Article.deleteMany({});
            console.log("Articles delted!");
        } catch (err) {
            console.log(err);
        }
    });

app.route("/articles/:title")
    .get(async (req, res) => {
        try {
            let foundArticle = await Article.findOne({
                title: req.params.title,
            });
            if (foundArticle) {
                console.log("Article found!");
                res.send(foundArticle);
            } else {
                console.log("Nothing found!");
                res.send();
            }
        } catch (err) {
            console.log(err);
        }
    })
    .delete(async (req, res) => {
        try {
            let dbResponse = await Article.deleteOne({
                title: req.params.title,
            });
            res.send(dbResponse);
            if (dbResponse.deletedCount > 0) {
                console.log("Article deleted!");
            } else {
                console.log("Nothing found!");
            }
        } catch (err) {
            console.log(err);
        }
    })
    .put(async (req, res) => {})
    .patch(async (req, res) => {});

// ----------------
// listener
//-----------------
app.listen(3000, () => {
    console.log("Server started on port 3000");
});

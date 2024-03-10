const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// -----------------------
// route handlers
// -----------------------

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

app.get("/articles", async (req, res) => {
    try {
        let foundArticles = await Article.find({});
        console.log(foundArticles);
        res.send(foundArticles);
    } catch (error) {
        console.log(error);
    }
});

app.post("/articles", async (req, res) => {
    let newArticle = new Article({
        title: req.body.title,
        content: req.body.content,
    });

    try {
        await newArticle.save();
        console.log("Article saved!");
    } catch (err) {
        console.log(err);
    }
});

// ----------------
// listener
//-----------------
app.listen(3000, () => {
    console.log("Server started on port 3000");
});

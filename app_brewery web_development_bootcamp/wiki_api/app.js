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

// ----------------
// listener
//-----------------
app.listen(3000, () => {
    console.log("Server started on port 3000");
});

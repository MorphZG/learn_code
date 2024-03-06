const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const { lowerCase, truncate } = require("lodash");

const homeStartingContent =
    "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
    "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
    "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    let foundPosts = await Post.find({});
    res.render("home", {
        homeStartingContent: homeStartingContent,
        posts: foundPosts,
    });
});

app.get("/about", (req, res) => {
    res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
    res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/compose", async (req, res) => {
    let title = req.body.titleInput;
    let content = req.body.postInput;
    let date = new Date().toLocaleDateString("en-GB");
    let author = req.body.author;
    let newPost = new Post({
        date: date,
        title: title,
        content: content,
        author: author,
    });
    await newPost.save();
    res.redirect("/");
});

// routes for each post
app.get("/posts/:postID", async (req, res) => {
    let requestedPost = req.params.postID;
    postObject = await Post.findById(requestedPost);
    res.render("post", { post: postObject });
});

// ------------------------
//  database configuration
//-------------------------

// localhost connection
mongoose.connect(`mongodb://127.0.0.1:27017/blogTutorial`);

// document schema
const postSchema = {
    date: Date,
    title: String,
    content: String,
    author: String,
};
// create model from schema, model(singularDocumentName, schemaName)
const Post = mongoose.model("post", postSchema);

// -------------------------
//    listener
// -------------------------
app.listen(3000, function () {
    console.log("Server started on port 3000");
});

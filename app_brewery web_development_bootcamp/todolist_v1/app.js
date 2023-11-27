const express = require("express");
const bodyParser = require("body-parser");
const date = require(`${__dirname}/date.js`)

// global variables
const app = express();
let items = [];
let workItems = [];

// configuration
app.set("view engine", "ejs"); // set the "view engine" to "ejs"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // serve static files from public dir

app.get("/", function (req, res) {
    let day = date.getDay();
    // render list file from views directory and pass the variable values
    res.render("list", { listTitle: day, newListItem: items });
});

app.get("/work", function (req, res) {
    // render list file from views directory and pass the variable values
    res.render("list", { listTitle: "Work List", newListItem: workItems });
});

app.post("/", function (req, res) {
    let userInput = req.body.userInput; // <input name="userInput">
    if (req.body.list == "Work" ) {
        workItems.push(userInput)
        res.redirect("/work")
    } else {
        items.push(userInput)
        res.redirect("/")
    }
});

app.get("/about", function (req, res) {
    res.render("about")
})

app.listen(3000, function () {
    console.log("server started on port 3000");
});

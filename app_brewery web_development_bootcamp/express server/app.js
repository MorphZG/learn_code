const express = require("express");
const app = express();
const port = 3000;

// handle GET request
app.get("/", function (req, res) {
    res.send("<h1>Hello world!</h1>"); // send response to client
});

// handle GET request
app.get("/contact", function (req, res) {
    res.send("<h1>Contact</h1>Contact me at: email@email.com"); // send response to client
});

// handle GET request
app.get("/about", function (req, res) {
    res.send("<h1>About</h1>Crawling through digital realms of bits and bytes"); // send response to client
});

// handle GET request
app.get("/hobbies", function (req, res) {
    res.send("<h1>Hobbies</h1><ul><li>Coffee</li><li>Code</li><li>Music</li></ul>"); // send response to client
});

// listen for connections
app.listen(port, function () {
    console.log(`server started on port ${port}`);
});

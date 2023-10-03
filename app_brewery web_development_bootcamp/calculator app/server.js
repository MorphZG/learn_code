const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// listen for connections
app.listen(port, function () {
    console.log(`server started on port ${port}`);
});

// use body-parser urlencoded mode to parse the data from the html forms (POST request)
app.use(bodyParser.urlencoded({ extended: true }));

// -----------------------calculator index.html
// handle GET request
app.get("/", function (req, res) {
    // send file as a response to client
    // __dirname constant holds the value of a root directory
    res.sendFile(`${__dirname}/index.html`);
});

// handle POST request
app.post("/", function (req, res) {
    console.log(req.body);

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;

    res.send(`The result of the calculation is ${result}`);
});

// ----------------------- bmiCalculator.html
// handle GET request
app.get("/bmicalculator", function (req, res) {
    res.sendFile(`${__dirname}/bmiCalculator.html`);
});

//handle POST request
app.post("/bmicalculator", function (req, res) {
    console.log(req.body);

    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    height = height * 0.01;
    let result = (weight / (height * height)).toFixed(2);

    res.send(`Your BMI is ${result}`);
});


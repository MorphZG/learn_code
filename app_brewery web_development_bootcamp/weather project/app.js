const express = require("express");
const https = require("node:https");
const bodyParser = require("body-parser");
require("dotenv").config(); // read environment variables from .env

const app = express();
const port = 3000;

const appId = process.env.appId; // environment variable, API key
const endpoint = "https://api.openweathermap.org/data/2.5/weather";
const units = "metric"

// urlencoded is mode of body-parser to read <form> inputs
app.use(bodyParser.urlencoded({ extended: true }));

// handle GET requests
app.get("/", function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

// handle POST requests
app.post("/", function (req, res) {

    const cityName = req.body.cityName 
    console.log(req.body.cityName); // request body: <input name="cityName" /> 

    const url = `${endpoint}?appid=${appId}&q=${cityName}&units=${units}`;

    // get request to the url
    https.get(url, function (response) {
        // callback
        console.log(response.statusCode);
        // when "data" event happens
        response.on("data", function (data) {
            // received data is in hexadecimal code
            //console.log(data);
            // convert
            //process.stdout.write(data);
            // parse the received data as JSON
            const weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            // response object is WritableStream class, write response body before sending
            res.write(`<p>Current weather: ${weatherDescription}</p>`);
            res.write(`<h2>The temperature in ${cityName} is ${temperature} c</h2>`);
            res.write(`<img src="${iconURL}" alt="weather icon">`);
            // send response object from app.get() to client's browser
            res.send();
        });
    });
});

// listener
app.listen(port, function () {
    console.log(`server is running on port ${port}`);
});

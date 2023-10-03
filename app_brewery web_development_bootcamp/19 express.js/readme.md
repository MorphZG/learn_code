# Express.js

## notes

- work directory: [express server](../express%20server/)
- documentation: [express documentation](https://expressjs.com/)
- localhost:3000 | http://127.0.0.1:3000/
- handle HTTP requests and responses
- routes
- respond to requests with HTML files
- `__dir` constant variable holds root path
- `body-parser` middleware [documentation link](https://expressjs.com/en/resources/middleware/body-parser.html)

## summary

**Before everything, it must be noted that express.js have amazing documentation. Check it out!**

Express.js is node.js framework that speeds up server development. Start the server with `$node filename.js`. If everything is done properly server will listen for connections on a predefined port to localhost. In my simple server app i have setup GET requests. When my server receives the GET request from the client it will invoke a callback function with a response to the defined route. Routes are simply the URLs the client is hitting with different requests. `/` is a homepage route (can be compared with root directory on our hard drives). Callback receives two inputs, request and response objects. Each of them have different methods we can use to respond back to client or request something.

I have installed nodemon. Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. No need to manually restart the server app. Nodemon does not require any additional changes to your code or method of development. Nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

```shell
sudo npm install -g nodemon
nodemon script.js
```

`response.sendFile()`. Providing a relative path name of files hosted on our computer can cause an issue when server app is hosted somewhere else. Best solution is to use the constant `__dirname` that holds the path to root directory. Try to `console.log(__dirname)` and you will get the full path to the app directory. If you append the required filename to `__dirname` you will always get the correct path. `response.sendFile('${__dirname}/index.html')`

`body-parser` is a middleware module maintained by the expressjs team. Middleware is anything that runs between server receiving the http request and sending the response. `body-parser` allows us to access the parsed version of the http request. Check out the [documentation page](https://expressjs.com/en/resources/middleware/body-parser.html) for more info. There are also a well written guides at [expressjs.com](https://expressjs.com/). Make sure to read more about middleware.

After `body-parser` parses the http request we can access the actual html data from the client through the `request.body` object. In the example of my calculator app i can access the values that user have input in the html form. If you check out the example below, for each input field i have a defined name, "num1" and "num2" and i can access the values from each of those fields. After server receives a POST request it can work on the values and send the result as a response to the client.

```html
<h1>Calculator</h1>
<form action="/" , method="post">
    <input type="text" name="num1" placeholder="First Number" />
    <input type="text" name="num2" placeholder="Second Number" />
    <button type="submit" name="submit">Calculate</button>
</form>
```

I can write a handler that will handle the POST request with `console.log(request.body)` to log the the `request.body` object when server receives the request. Output is listed below. Those are key: value pairs so i can access each value separately.

```text
{ num1: '1', num2: '4', submit: '' }
```

Now we have a full stack web application. Our source code is now hidden from the users, all they can see is a simple html file while everything else is being hidden as a backend.

## methods

- `app.listen(port, callbackFn())` listen for connections on specified port
- `app.get(target_route, callbackFn([request, response]))` handle GET request
- `app.post(target_route, callbackFn([request, response]))` handle POST request
- `response.sendFile(file_path)` transfers the file at the given path.
- `response.send()`

## read more

[MDN web dev reference](https://developer.mozilla.org/en-US/docs/Web)
[Express web framework](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
[HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
[HTTP messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)

#tags: readme, express, body-parser,
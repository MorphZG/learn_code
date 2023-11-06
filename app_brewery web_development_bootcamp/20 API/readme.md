# API - Application programming interface

## notes

- work directory: [weather project](../weather%20project/)
- work directory: [newsletter-signup](../newsletter-signup/)
- node.org documentation: [node.org documentation](https://nodejs.org/en/)
- node.dev documentation: [node.dev documentation](https://nodejs.dev/en/)
- express documentation: [express documentation](https://expressjs.com/)
- `body-parser` middleware [documentation link](https://expressjs.com/en/resources/middleware/body-parser.html)
- Endpoints, paths, parameters, authentication
- json format: javascript object notation
- xml format: extensible markup language
- `https` node module for http requests, included in standard library

## summary

An Application Programming Interface, API, is a set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system. It is an interface which allows us to use the prescribed rules and make a request to the external system for some piece of data. Or it can be a set of functions, methods and objects available to create another software. I was using a jQuery API that simplified javascript applications. In simple terms API is just an interface that help us create new software or interact with another system.

When working with a third-party APIs to fetch some data from another server, web apps will transfer such data over the HTTP protocol. Learning more about internet networks and protocols are must for a web developer. At the bottom of this readme file i have linked some resources worth reading. It is crucial to understand the mechanics of the HTTP and later dive deeper into TCP/UDP if you really want to master the web.

Client sends the request to the server which than writes the response back to client. It is important to note that HTTP protocol disconnects after each transaction so you can have only one `response.send()` in each request handler. If you need multiple strings or parts of data to send use `response.write()` to prepare the response before sending it.

Each HTTP request and response is composed of a start-line, optional set of headers and a body. The start-line and HTTP headers of the HTTP message are collectively known as the head of the requests, whereas its payload is known as the body. Here is the structure:

- A **start-line** describing the requests to be implemented, or its status of whether successful or a failure. This start-line is always a single line.
- An optional set of HTTP **headers** specifying the request, or describing the body included in the message.
- A blank line indicating all meta-information for the request has been sent.
- An optional **body** containing data associated with the request (like content of an HTML form), or the document associated with a response. The presence of the body and its size is specified by the start-line and HTTP headers.

`body-parser` module allows me to parse the body of the request and read the data from the user input.

### mailchimp

For the "newsletter-signup" the course instructor works with now deprecated `request` library. I wanted to try the alternatives like `got` module but this being a small tutorial project made no sense in experimenting so i will stick with the `request` and follow the course. Follow the instructions at [mailchimp.com](https://mailchimp.com/developer/marketing/guides/quick-start/). There is extensive client library for different programming languages. Mailchimp promotes their SDK (Software Development Kit) you can use as an alternative to the API calls. Here is the link to official documentation: [mailchimp SDK](https://mailchimp.com/developer/tools/).

## read more

- [MDN web dev reference](https://developer.mozilla.org/en-US/docs/Web)
- [Anatomy of an HTTP transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction)
- [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [HTTP messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
- [Software development kit / SDK](https://www.ibm.com/blog/sdk-vs-api/)

#tags: readme, https post request, api,
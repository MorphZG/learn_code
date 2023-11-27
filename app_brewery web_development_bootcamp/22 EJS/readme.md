# Embedded JavaScript

## notes

- work directory: [todolist_v1](../todolist_v1/)
- documentation for Embeded Javascript: [EJS.co](https://ejs.co/)
- using EJS with express: [github page](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
- view engines or template engines
- redirect after post to get request
- templates vs. layouts
- module exports

## summary

View engines or template engines, allows us to render web pages using a template files. Templates can be filled with the actual data from the application or database, with javascript code embedded into the html we can make dynamic pages. View engines parse the template file with embedded javascript and generates the html output.

Templating helps with reducing the repetitive tasks and create multiple pages with dynamic content. There are many tools around but EJS is one of the easier and probably the most popular.

In a template file, special tags separate javascript code from the html. Full list of available tags is listed in official [documentation page](https://ejs.co). Template files have .ejs extension instead of .html and by default node.js looks for them under the `views` directory, can change it with `app.set("views", "myDirectory")`. For practical example take a look at this file: [todolist_vi1/list.ejs](../todolist_v1/views/list.ejs), it is a part of my [todolist_v1](../todolist_v1/) project.

## read more

[template engine with express](https://expressjs.com/en/guide/using-template-engines.html)
[List of npm template engines](https://www.npmjs.com/package/consolidate)
[Post-Redirect-Get pattern](https://www.theserverside.com/news/1365146/Redirect-After-Post)

#tags: readme, ejs, templates, view engine,
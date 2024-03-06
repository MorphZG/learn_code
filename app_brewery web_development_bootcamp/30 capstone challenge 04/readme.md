# Coding challenge - Blog website upgrade

## notes

- work folder: [capstone_4 blog upgrade](../capstone_4%20blog%20upgrade/)

### instructions

- Build upon previous `capstone_3 blog website` project
- You should be able to go to the compose page and add a new post which will be added to your database as a new document.
- When you go to localhost:3000 you should see the posts you created in the compose page.
- At the moment, when you compose a post and redirect to the root route, sometimes the post is not yet saved and doesn’t show up on the home page. Add a callback to the save method to only redirect to the home page once save is complete with no errors.
- When you click on Read More, it should take you to the post.ejs page rendering the correct post using the post._id
- Completed project can be found in my [github.com/learn_code](https://github.com/MorphZG/learn_code) repository.

## summary

Step 3, where instructor asks me to add error handler as a callback. I would like to learn more about promises and instead of a callback, work with a promise. `save()` method accepts an optional input function and returns undefined if used with callback or a promise otherwise. Here is the [doc link](https://mongoosejs.com/docs/api/document.html#Document.prototype.save())

#tags: capstone, blog, database, mongodb, mongoose
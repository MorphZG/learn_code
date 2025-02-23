# Exercise

Add the following elements to the container using only javascript and the DOM methods:
  - a `<p>` tag with red text that says "Hi I'm red!"
  - an `<h3>` with blue text that says "I'm blue h3!"
  - a `<div>` with black border and pink background color with the following elements inside:
    - another `<h1>` that says "I'm in a div"
    - a `<p>` that says "ME TOO!"
    - Hint for this one: after creating the `<div>` with `createElement`, append the `<h1>` and `<p>` to it before adding it to the container.

## Events

Now that we have a handle on manipulating the DOM with javascript, the next step is learning how to make it happen dynamically or on demand! Events are how you make that magic happen on your pages. Events are actions that occur on your webpage, such as mouse-clicks or key-presses. Using javascript, we can make our webpage listen to and react to these events.

There are three primary ways to go about this:
  - You can specify function attributes directly on your HTML elements.
  - You can set properties in the form of `on<eventType>`, such ad `onclick` or `onmousedown`, on the DOM nodes in your javascript.
  - You can attach event listeners to the DOM nodes in your javascript.
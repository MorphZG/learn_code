# jQuery

## notes

- work folder: [jquery](../jquery/)
- jQuery is a library that shortens the syntax of vanilla javascript
- position of HTML script tag must be above javascript, both at the bottom of a body
- `$(document).ready(function(){})` will check if document is parsed
- animations: `animate()` `slideUp()` `slideDown()` `fadeIn()` `fadeOut()` ...

## summary

Instead of vanilla `document.querySelector("h1")` with jQuery we can write it like `jquery("h1")` or even shorter `$("h1")`, takes css selector as input. There is also no difference in selecting single element or many elements. It is important to position the html script tag above the javascript. Some developers use this syntax to check if the jquery is loaded: `$(document).ready(function() {})` with the empty callback function. If you position the script tags at the bottom of a body tag than there is no need for it. Also important to notice, jquery tag should be above the  vanilla javascript.

Event listeners are handled very simple. You don't need loops to add multiple listeners. jQuery will auto select all elements that match the selector. `$("selector").click(callbackFn)`. You can also use `this` keyword in a callback function to target the event object or element that fired the event. There is also one very flexible method `$("selector").on("event_type", callbackFn)`

### methods

```javascript
$(document).ready(callbackFn)  // check if complete document parsed

$("selector").css("color", "red"); // set color property to red
$("selector").css("color");  // return color value
$("selector").addClass("class");  // add .invisible css class
$("selector").addClass("class class class")  // add multiple css classes, separate with space
$("selector").removeClass("class");  // remove css class
$("selector").hasClass("class")  // return boolean value
$("selector").text("text")  // add text content to selected element: element.textContent()
$("selector").html("html code")  // add html code as a child to selected element: element.innerHTML()
$("selector").attr("attribute")  // get the attribute of selected element, remember that class is also the attribute
$("selector").attr("attribute", "value")  // set the value of the attribute, remember that class is also the attribute
$("selector").click(callbackFn) // add event listener
$("selector").keydown(function(event) {event.key}) // add event listener
$("selector").on("event_type", callbackFn)  // add event listener
$("selector").before("html code")  // position html code relative to selected element
$("selector").after("html code")  // position html code relative to selected element
$("selector").prepend("html code")  // position html code relative to selected element
$("selector").append("html code")  // position html code relative to selected element
$("selector").remove()  // remove all selected elements from the page
```

There are methods that can help with simple animation of html elements by gradually changing some css properties or move the elements on page. Most of these methods are self explanatory and easy to understand. What is good about it is the chaining feature. You can chain multiple methods one after the other to get more complex results. For more details check out the official documentation, jQuery is very well documented. [Link to official docs](https://api.jquery.com/). Look for 
"Category: Effects" if you are looking for animation details.

### animation methods

```javascript
$("selector").hide()
$("selector").show()
$("selector").toggle()
$("selector").fadeOut()
$("selector").fadeIn()
$("selector").fadeToggle()
$("selector").slideUp()
$("selector").slideDown()
$("selector").slideToggle()
// gradually change the numeric css values
$("selector").animate({style_property: value} [, duration, easing, callbackFn] )
```

Animations. Try this. Here we have html, css and javascript. We need all 3 to animate the page, right? First script tag waits for browser to parse the document. When `.ready()` returns true it will call the `.animate()` method on `#myDiv` that changes the css properties of height and width. There is no need to memorize every little detail. jQuery is extensively documented so don't forget to check out official documentation if you ever get stuck.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
    </script>
    <script>
        $(document).ready(function () { $('#myDiv').animate({ height: '200px', width: '200px' }); });
    </script>
  <style>
        .redDiv {
            background-color: red;
            height: 100px;
            width: 100px;
          }
    </style>
</head>
<body>
  <h1>jQuery animate() method</h1>
  <div id="myDiv" class="redDiv"> </div>
</body>
</html>
```

#tags: readme, function, animation

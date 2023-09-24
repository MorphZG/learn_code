# advanced javascript and DOM manipulation

## notes

- work folder: [drum kit](../drum%20kit/)
- useful documentation reading: [dynamic client-side scripting](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- anonymous functions, no name functions usually invoked on spot
- event listeners, waiting for events to take some action. event interface (API)
- `array.forEach()` executes provided function once for each element of array or nodelist
- higher order functions, take other functions as input
- `HTMLMediaElement` interface that adds to HTMLElement the properties and methods needed to support basic audio and video
- `this` keyword is a reference to an object, works little different than in other languages. value depends on function call
- `switch` statements
- callbacks, function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. Synchronous (invoked on spot) and asynchronous (waits for event to happen)
- javascript objects and their methods, constructors


## summary

Moving up the skill level, learning about advanced js and DOM manipulation. Event listeners are simple procedures that waits for an event before triggering some action. There are many event types, from resizing the window to copy and paste, mouse and keyboard usage... Event properties can be accessed as any other object. All events are documented as [event reference](https://developer.mozilla.org/en-US/docs/Web/Events).

`EventTarget.addEventListener("event_type", listener)` sets up a function to be called whenever the specified event is delivered to the target. Function will receive the event object as an input parameter. We can access it's properties in function body. There is also a complete list of event types, documented as event reference: [Events reference](https://developer.mozilla.org/en-US/docs/Web/Events). Here is a list of API's which are based on the main Event interface (API): [Event interfaces](https://developer.mozilla.org/en-US/docs/Web/API/Event)

`array.forEach(callbackFn)` When reading through documentation i found useful method. It will execute callbackFn once for each element of the array or NodeList. NodeList is a collection of nodes or DOM objects, returned by functions like `querySelectorAll()`. callbackFn is called with the following arguments: element (current element), index (current index) and array (array itself). So we can write something like:

```javascript
// Read documentation if it sounds confusing.
// call anonymous arrow function on each element and it's index
array.forEach( (element, index) => { console.log(element, index) } ); 
// buttons is a nodeList, call addEventListener() on each element
buttons.forEach( addEventListener("click", handleClick) );
```

`HTMLMediaElement` is another DOM interface (API) that supports basic audio and video functionality. I used it to create `Audio` objects and play the sound by pressing the keyboard or button click. [Documentation link](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)

```javascript
// create new Audio object and play the sound file
var audio = new Audio("/drum kit/sounds/tom-1.mp3");
audio.play();
```

`this` keyword is a reference to an object, works little different than in other languages. In most cases, the value of `this` is determined by how a function is called (binds to object at runtime). If you call arrow function it will take the value of the scope above while with standard functions it takes the object from local scope.

`switch` statement is just a simplified solution to many if, else if, else statements. After defining a variable, and different `case` values, we have defined a `default` value for those cases when none of the above values are true. It is also important to have `break` keyword after each case.

Callback functions are functions that are passed as an input to higher order function. It will wait for some action to finish before being called back. After invoking event listener on the object and event is activated, the callback function will receive event object as input. We can than refer to the properties of event object in the function body to get information about it. Execution may be immediate as in a synchronous callback, or it might happen at a later point in time as in an asynchronous callback.

```javascript
// add event listener to document object (DOM api)
// after "keydown" event, invoke the callBackFn
// pass event object with information about event as an input to callBackFn
document.addEventListener("keydown", function callBackFn(eventObject) {
    console.log(eventObject.key)  // .key is a property of eventObject
});
```

### methods

#tags: readme, object, callback
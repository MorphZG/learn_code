# Document Object Model DOM

## notes

- work folder: [DOM](../DOM/)
- javascript should be loaded after all other elements, position the script tag at the bottom of the body.
- browsers parse the HTML file and converts the document into a tree of objects with logical hierarchy.
- Document Object Model: [Documentation link](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- DOM objects have properties and methods.
- DOM interfaces (api) are built into the browser to help javascript access the DOM
- separation of concerns: HTML structure, CSS style, JavaScript behavior.

## summary

After parsing the html document, browsers create the programming interface that will represent the page. Now we can change the document structure, style and content through it's API. Every html tag is now an object with it's properties and methods. DOM have a logical hierarchy, tree like structure where each object have it's parent, child and a sibling. We can also get and set properties of every element and call different methods using javascript. For more details on manipulation of DOM objects browse the available documentation online. DOM also have different interfaces. DOM interfaces provide a means for JavaScript to access the DOM. The DOM interfaces are not built into JavaScript, instead, they are built into the web browser. [Documentation link](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

To keep the code neat and organized some developers propose the separation of concerns. It is a design principle where we split the code in to sections and each section addresses different concern. There is a proposition that HTML should define the structure of a web page, CSS defines a style and javascript defines mechanics or behavior. While researching the topic i found there are also many other developers that propose different design principles or different separation. With years of development of HTML, CSS and Javascript allowed for different approach where it is possible to mix them up. With use of advanced css frameworks you can define style in html file for example. There is a lot more to learn regarding the code design, it deserves it's own course.

Some of the examples are listed below. There is also a work folder: [DOM](../DOM/). Here you can view the the index.html, script.js and style.css files where i have exercised some of the mentioned concepts.

### methods and properties of HTML objects

- `document.getElementById()` returns single element
- `document.getElementsByTagName()` returns array of elements, select single item with index[i]
- `document.getElementsByClassName()` returns array of elements, select single item with index[i]
- `document.querySelector()` returns first element that matches a CSS selector (id, .class, #tag, :pseudo-class ...), most versatile since you can combine many CSS selectors. If there is a child tag inside another parent tag select it as: ("parent child"), put comma in between to select non relation (".class", "#id")
- `document.querySelectorAll()` returns array of all elements that matches a CSS selector (id, .class, #tag, :pseudo-class ...), possible to combine more than one selector `querySelectorAll('h1, h2, h3')`

- `element.innerHTML` content between element tags together with html, anything between.
- `element.textContent` only text content between element, no html tags.
- `element.attributes` get array html attributes of an element (class, id, src, href, style, type...)
- `element.getAttribute("name")` return single attribute value of the element
- `element.setAttribute("name", "value")` set the value for the name attribute
- `element.hasAttribute("name")` returns true if element has a name attribute
- `element.style.color` style property, check documentation for a full list
- `element.style.backgroundColor` style property, check documentation for a full list
- `element.style.fontSize` style property, check documentation for a full list
- `element.classList` get the array of classes under selected element
- `element.classList.add()` add a class name to the classList of an element
- `element.classList.remove()` remove a class name from the classList of an element
- `element.classList.toggle()` toggle a class name from the classList of an element
- `element.click()` simulates the click on the element

### examples

```javascript
// return the list of all h1, h2, h3 and h4 headings
var headings = document.querySelectorAll('h1, h2, h3, h4')
// get the length of the array
numberOfHeadings = headings.length
// change the content of the second heading in the array
headings[1].innerHTML = 'This will change content of second heading in the array'
// change the color of the first heading in the array
headings[0].style.color = 'red'
// add the .invisible class to the list of classes of selected heading
headings[0].classList.add('invisible')
// add emphasis to the selected heading
headings[0].innerHTML = '<em>This is the heading</em>'
// change the heading text
headings[0].textContent = 'This is new heading'
```

#tags: readme, function, property
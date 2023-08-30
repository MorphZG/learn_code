document.query

// store the h1 tag inside the variable
let element = document.querySelector("h1");
// using javascript add the "huge" class to selected h1
element.classList.toggle("huge");


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

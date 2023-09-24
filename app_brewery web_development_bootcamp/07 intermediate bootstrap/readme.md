# Intermediate Bootstrap

## notes

- work folder [bootstrap installation](../bootstrap%20installation/)
- project folder [tindog website](../tindog%20website/)
- bootstrap documentation at: [getbootstrap.com](https://getbootstrap.com/)
- bootstrap carousel slide
- bootstrap cards
- z-index and stacking order
- css media queries
- when refactoring code you should prioritize for readability, modularity, efficiency
- combining css selectors, hierarchical selectors
- read more about html and css best practices

## summary

z-index is affecting the z axis of the elements, how far or close to the viewer they are. Prerequisite to z-index is a position property, without position set to absolute or relative you won't see changes to z-index since elements won't stack.

CSS selectors can be combined together in few different ways. Multiple HTML elements that share same CSS properties can be written one after another separated with comma (,) `h1, h2, h3`. Selecting the single HTML element with particular id or class name can be written `element.class-name` or `element#id` without any separators. Hierarchical selectors are targeting particular HTML element positioned as a child inside another parent element, written with space in between `.parent-class .child-class`.

CSS selectors also follow some priority rules depending on how specific the selector is. Highest priority is the id since there is only one with the same name, than comes the class and than the element selector.

If i have the heading element written like this than it's color will be blue:

```html
<h1 id=heading class="title">This heading is blue</h1>
```

```css
h1 {
  color: red;
}
.title {
  color: green;
}
#heading {
  color: blue;
}
```

Different ways of combining the selectors:

```css

/* combined selectors */

/* different elements with same property */
h1, h2, h3 {
  font-family: "Arial";
}

/* <h1 class="title"> */
h1.title {
  font-size: 2rem;
}
/* <h1 id="title"> */
h1#title {
  font-size: 2rem;
}
/* <span class="container-fluid red-box"> */
.container-fluid.red-box {
  background-color: red;
}

/* hierarchical selectors */
/* <div class="parent-class><span class="child-class"></div></span> */
.parent-class .child-class {
  background-color: red;
}

```

#tags: readme, selector, css
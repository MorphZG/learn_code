# Intermediate CSS

## Notes

- Work folder: [css personal site](../css%20personal%20site/)
- [Mozilla developer network](https://developer.mozilla.org/en-US/). Documentation, guides and reference pages for HTML, CSS and Javascript.
- think responsive, do not use fixed sizes, instead of width use max-width, min-height...
- favicons, `<link rel="icon">`
- div element (content division), generic block container
- span element, generic inline container
- margin, border, padding
- display property: block, inline, flex, grid, none...
- position property: static, relative, absolute, fixed.
- clear and float properties
- exercise at [frontendmentor.io](https://www.frontendmentor.io/home)

## Summary

Both div and span elements have same usecase, main difference is default display style. div is block container while span is inline container. Inline containers are probably a more flexible option since their position doesn't take the full horizontal width, it depends on the content dimensions. You can manipulate position of inline elements easily, but from the same reasons you cannot change the width of the inline containers. Alternative is the inline-block display, a combination of both display styles able to customize width and height but also acting as an inline element.

Position property is by default static. Setting it to relative and moving left or right by 30px will move it away from default static position. So relative position is relative to default static position, not relative to the screen. While changing the margin of the element will also push the other elements away, changing the relative position will not do so. Position property alone will not move the objects, we must set the coordinates using top, bottom, left and right properties. Absolute position will move the element relative to it's first parent element with relative. When setting the coordinates for absolute position you should keep in mind it's parent element. There is also a fixed position and that one will hold the position even after the user scrolls through the page.

Float primary usecase is wrapping the text around the image or other objects. Float should not be used as a positioning property as many beginners do it.

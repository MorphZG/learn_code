## Introduction to JSX Babel - README
continue at vid 394
### Overview

This project is a simple introduction to JSX (JavaScript XML) using React, aimed at understanding the basic structure of React applications and JSX. It is designed for learners who are just getting started with React and its core concepts like JSX, component rendering, and modern JavaScript (ES6+) syntax.

### Key Concepts Covered
- **JSX**: A syntax extension that allows writing HTML directly within JavaScript files.
- **ReactDOM**: A module responsible for rendering the React elements into the DOM.
- **Babel**: A JavaScript compiler that transforms modern JavaScript code (including JSX) into browser-compatible JavaScript.
- **ES6 Syntax**: Introduction to newer JavaScript constructs, such as the `import` keyword, arrow functions, and more.

### Project Setup

1. **Clone the Repository**  
   Fork the sandbox project or create your own copy if you're using a platform like CodeSandbox.
   
2. **Install Dependencies**  
   No manual installation is needed when using CodeSandbox. Dependencies like `react` and `react-dom` can be installed directly via the platform's interface.

3. **Folder Structure**
   - `public/index.html`: Contains the root `div` element where the React app will be rendered.
   - `src/index.js`: Main JavaScript file where React is initialized and JSX is rendered.
   - `styles.css`: Blank stylesheet for custom styles (currently unused).

### JSX and Rendering

In the project, we use React to render a simple **Hello World** message into the DOM using JSX.

#### Example Code

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello World!</h1>, 
  document.getElementById('root')
);
```

#### Key Points:
- JSX allows writing HTML directly inside JavaScript code.
- `ReactDOM.render()` takes two arguments:
  1. **What to show**: In this case, an `h1` element with the text "Hello World".
  2. **Where to show it**: The `div` with the `id="root"` in `index.html`.

### Babel

Babel is responsible for transforming JSX into JavaScript that can be understood by all browsers, even older ones like Internet Explorer.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
```

Using Babel, the following JSX:

```jsx
<h1>Hello World!</h1>
```

Is compiled into:

```js
React.createElement('h1', null, 'Hello World!')
```

### ES6 Features

We also explore some ES6 features like the `import` keyword, which replaces older `require` statements:

```js
import React from 'react';
import ReactDOM from 'react-dom';
```

This is the modern, cleaner way to bring in modules like React and ReactDOM.

### Running the Project

1. Fork the CodeSandbox project or set up a similar environment locally.
2. Modify the code in `index.js` to render JSX elements or explore ES6 features.
3. Open the browser preview to see the rendered output.

### Conclusion

This project serves as an introduction to React's JSX syntax, modern JavaScript features, and the role of Babel in compiling next-generation JavaScript. It highlights how to set up a basic React app using JSX and gives a glimpse into the power of React and Babel together.
# Objects and classes, ES5 and ES6 differences

ES5 (ECMAScript 5) and ES6 (ECMAScript 2015, also known as ES2015) are two different versions of the JavaScript programming language, and they introduced significant changes and improvements in the way you work with objects, classes, and prototypes. Since older ES5 is still in use i will try to learn more about both.

## Object Creation

- In ES5, you typically create objects using constructor functions and the `new` keyword. There is no built-in class syntax for object creation.
- ES6 introduced the `class` syntax, making it easier to define and create objects with constructor functions and class-based syntax.

```javascript
// ES5 constructor function ===========
function User(name) {
  this.name = name;
}
var user = new User('Cleopatra');

// ES6 class ==========================
class User {
  constructor(name) {
    this.name = name;
  }
}
const user = new User('Cleopatra');
```

## Class Definitions

- In ES5, you define classes as constructor functions and add methods to their prototypes.
- In ES6, you can define classes using the `class` keyword, which provides a more structured and concise way to define classes.

```javascript
// ES5 class definition ===============
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

// ES6 class definition ===============
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
```

## Inheritance and Prototypes

- In ES5, you typically implement inheritance using prototype chains and the `Object.create` method. It's less intuitive and requires more manual setup. Prototype is a blueprint for that object, it allows objects to inherit properties and methods from other objects.
- ES6 introduced a more straightforward way to handle inheritance through the `extends` keyword and `super` keyword for calling parent class methods.

```javascript
// ES5 ================================
// Parent class
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getInfo = function() {
  return "Make: " + this.make + ", Model: " + this.model;
};

// Child class
function ElectricCar(make, model, range) {
  // invoke the constructor of Car class and set value of 'this'
  // Car constructor executed within the context of the ElectricCar
  Car.call(this, make, model);
  this.range = range;
};

// ElectricCar.prototype will inherit from the Car.prototype
ElectricCar.prototype = Object.create(Car.prototype);
// It is important to point the reference back to ElectricCar
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getRange = function() {
  return "Range: " + this.range + " miles";
};

// Create an instance of ElectricCar
var myElectricCar = new ElectricCar("Tesla", "Model S", 300);

console.log(myElectricCar.getInfo()); // Output: Make: Tesla, Model: Model S
console.log(myElectricCar.getRange()); // Output: Range: 300 miles
```

```javascript
// ES6 =================================
// Parent class
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
}

// Child class
class ElectricCar extends Car {
  constructor(make, model, range) {
    super(make, model);
    this.range = range;
  }

  getRange() {
    return `Range: ${this.range} miles`;
  }
}

// Create an instance of ElectricCar
let myElectricCar = new ElectricCar("Tesla", "Model S", 300);

console.log(myElectricCar.getInfo()); // Output: Make: Tesla, Model: Model S
console.log(myElectricCar.getRange()); // Output: Range: 300 miles
```

## Method Definitions

- In ES5, methods are typically added to object prototypes.
- In ES6, you can define methods directly in class definitions.

```javascript
// ES5 method definition
Circle.prototype.getCircumference = function () {
  return 2 * Math.PI * this.radius;
};

// ES6 method definition
class Circle {
  // ...
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
```

In summary, ES6 introduced class syntax and improved the way you work with objects, classes, and prototypes in JavaScript, making code more readable and maintainable. It also simplified inheritance and introduced a more intuitive way to define and extend classes. However, ES5 is still relevant and widely used, especially in legacy codebases, so having an understanding of both versions is important for JavaScript developers.

#tags: readme, es5 es6, object, class,

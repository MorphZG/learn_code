// Foundations - Javascript basics - Object basics
// https://www.theodinproject.com/lessons/foundations-object-basics#assignment

// ------------------
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// ------------------
// check for emptiness
function isEmpty(obj) {
    // if loop runs, object is not empty
    for (var i in obj) {
    }
    return true;
}

let test = {};
console.log(isEmpty(test));

// ------------------
// sum all salaries and store in the variable `sum`.
// should be `390`
// if empty, sum should be 0
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0
for (let name in salaries) {
    let salary = salaries[name]
    sum = sum + salary
}
console.log(sum)

// ------------------
// create a function multiplyNumeric(obj)
// multiply all numeric values of obj by 2
// note that multiplyNumeric does not need to return anything
// modify the object inplace
// use typeof to check for a number here

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
function multiplyNumeric(obj) {
    for (let prop in obj) {
        (typeof obj[prop] === "number") ? obj[prop] *= 2 : obj[prop]

    }
    console.log(obj)
}

// ------------------
// CONSTRUCTORS

function createPerson1(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
let petar = createPerson1("Petar")
petar.introduceSelf()
console.log(petar)

// ------------------
function createPerson2(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = () => {
    console.log(`Hi! I'm ${name}.`);
  };
  return obj;
}

let zoran = createPerson2("Zoran")
zoran.introduceSelf()
console.log(zoran)

// ------------------
function createPerson3(name) {
  return {
    name,
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  };
}

let jura = createPerson3("Jura")
jura.introduceSelf()
console.log(jura)
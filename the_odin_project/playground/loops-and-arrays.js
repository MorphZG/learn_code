// Foundations > Javascript basics > Loops and arrays

// =========================================================
// using map() function, loop through the array of strings
// apply toUpperCase() on every item in the array
// new array should contain strings with all uppercase
// print the results
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
console.log(cats);

const upperCats = cats.map((cat) => cat.toUpperCase());

console.log(upperCats);

const lowerCats = cats.map((cat) => cat.toLowerCase());
console.log(lowerCats);

// =========================================================
// sum of triple evens
// take in an array
// triple every even number
// show sum of those numbers

function sumTripleEvens(array) {
    // use filter() to build array of evens
    let evens = array.filter((item) => item % 2 === 0); // return true if item is even
    // use map() to multiply evens with 3
    let tripples = evens.map((item) => item * 3); // return item * 3
    // return the sum of trippled evens
    return tripples.reduce((accumulator, current) => accumulator + current);
}

const numbers = [1, 2, 4, 3, 9, 10]; // sum of trippled evens is 48

console.log(sumTripleEvens(numbers));
// =========================================================

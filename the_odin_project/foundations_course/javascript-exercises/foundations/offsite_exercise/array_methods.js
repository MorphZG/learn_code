// Object arrays

// https://javascript.info/array-methods#tasks
/*
Go back to the array methods exercises at the end of the JavaScript.info array methods article from a few lessons ago. Do only the following exercises:
- Map to names: https://javascript.info/task/array-get-names
- Map to objects: https://javascript.info/task/map-objects
- Sort users by age: https://javascript.info/task/sort-objects
- Get average age: https://javascript.info/task/average-age
- Create keyed object from array: https://javascript.info/task/reduce-object
*/

/*
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];
//console.log(users) // logs array of objects

let names = users.map((object) => {
    return object.name;
});
//console.log(names) // logs array of names

/*
You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
*/
let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [john2, pete2, mary2];

let usersMapped = users2.map((object) => {
    return {
        Full_Name: `${object.name} ${object.surname}`,
        id: object.id,
    };
});

//console.log(usersMapped)

/*
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
*/
let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let users3 = [pete3, john3, mary3];

sortByAge(users3); // inplace sort
function sortByAge(users) {
    users.sort((a, b) => {
        return a.age - b.age;
    });
}

//console.log(users3);

/*
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
The formula for the average is (age1 + age2 + ... + ageN) / N.
*/

function getAverageAge(users) {
    return (
        users.reduce((prev, user) => {
            return prev + user.age;
        }, 0) / users.length
    );
}

let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 29 };

let users4 = [john4, pete4, mary4];

console.log(getAverageAge(users4)); // (25 + 30 + 29) / 3 = 28
/*
Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.
*/

let users5 = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users5);
function groupById(users) {}

/*
 after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

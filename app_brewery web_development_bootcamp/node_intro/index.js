// const fs = require("node:fs");
// copy file1.txt to file2.txt
// fs.copyFileSync("file1.txt", "file2.txt")

const superheroes = require("superheroes");
const supervillains = require("supervillains");

for (let i = 0; i < 10; i++) {
    var mySuperHero = superheroes.random();
    var myVillain = supervillains.random();
    console.log(`Hero: ${mySuperHero}`);
    console.log(`Villain: ${myVillain}\n`)
}

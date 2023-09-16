// contructor function
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function () {
        alert("May i take your suitcase?");
        pickUpSuitcase();
        move();
    };
}

// contructor function
function HouseKeeper(name, age, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress...")
    }
}

// object initialization
var bellBoy1 = new BellBoy("Jura", 27, true, ["Hrvatski", "English"]);
var houseKeeper1 = new HouseKeeper("Maja", 41, 3, ["Bars", "Restaurants"])

// console logs
console.log(bellBoy1.name);
console.log(bellBoy1);

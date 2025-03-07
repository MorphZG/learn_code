import { writeFileSync, readFileSync } from "node:fs";

const users = [
  { name: "Adam Ondra", email: "adam.ondra@climbing.com" },
  { name: "Andrija Sertic", email: "andrija.sertic@bar.hr" },
];

// convert to json string
const usersJson = JSON.stringify(users);
// write to file
writeFileSync("output.json", usersJson);
// read from file
const readUsersJson = readFileSync("output.json");
// parse the file content and log to console
const readUsers = JSON.parse(readUsersJson);
console.log(readUsers);

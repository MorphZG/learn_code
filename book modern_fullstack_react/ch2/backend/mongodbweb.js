import { createServer } from "node:http";
import { MongoClient } from "mongodb";

// define the connection and create a new MongoDB client
const url = "mongodb://localhost:27018/";
const dbName = "ch2";
const client = new MongoClient(url);

// connect to database and log the result
try {
  await client.connect();
  console.log("Successfully connected to database!");
} catch (err) {
  console.error("Error connecting to database:", err);
}

// create an http server and query the database
const server = createServer(async (req, res) => {
  const db = client.db(dbName);
  const users = db.collection("users");
  const userList = await users.find().toArray();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(userList));
});

// listen localhost for requests
const host = "localhost";
const port = 3000;
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});

/* 
white space
 */

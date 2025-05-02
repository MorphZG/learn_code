import mongoose from "mongoose";

export function initDatabase() {
  const DATABASE_URL = "mongodb://localhost:27018/blog";

  // listen for connection 'open' event and log the message
  mongoose.connection.on("open", () => {
    console.info("Successfully connected to the database:", DATABASE_URL);
  });

  // listen for connection "close" event and log message
  mongoose.connection.on("close", () => {
    console.info("Disconnected");
  });

  // connect to the database and return the connection object
  const connection = mongoose.connect(DATABASE_URL);
  return connection;
}

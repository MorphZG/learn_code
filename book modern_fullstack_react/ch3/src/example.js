import { initDatabase } from "./db/init.js";
import { Post } from "./db/models/post.js";
import mongoose from "mongoose";

// await for connection before accessing the database
await initDatabase();

const post = new Post({
  title: "Hello Mongoose!",
  author: "Zoran Topic",
  contents: "This post is stored in a MongoDB database using Mongoose",
  tags: ["mongoose", "mongodb", "docker"],
});

await post.save();
const posts = await Post.find();
console.log(posts);

mongoose.connection.close();

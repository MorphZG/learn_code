import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    // definitions, first argument
    title: { type: String, required: true },
    author: String,
    contents: String,
    tags: [String],
  },
  {
    // options, second argument
    timestamps: true,
  },
);

export const Post = mongoose.model("post", postSchema);

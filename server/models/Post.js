const mongoose = require("mongoose");

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
         type: String,
         required: true
    },
});

PostSchema.methods.sayHi = () => {
    let greeting = this.title
    ? "Hi my name is " + this.title
    : "I aint got no name";
    console.log("Hi" + greeting)
}

const Post = mongoose.model("Posts", PostSchema);

module.exports = Post;
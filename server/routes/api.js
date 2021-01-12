const express = require('express');
const router = express.Router();

const Post = require('../models/Post.js');

let aye = { greeting: "ayyye", name: "spuds"}
let howdy = "howdy";
let coolPost = new Post({ title: "cool poast", description: "a real cool poast"});

coolPost.sayHi();
console.log(coolPost.title)

// Get 
router.get('/db', async (req, res) => {
    res.sendStatus(500)
});

router.get('/howdy', async (req, res) => {
    res.status(200).send(howdy);
    console.log(howdy)
});

router.get('/aye', async (req, res) => {
    res.send(aye); 
    // make restricted route
});

// Post
router.post('/', (req, res) => {
  let post = new Post(req.body)
  post.save();
})

router.get("/findAll", (req, res) => {
    Post.find({})
})

module.exports = router; 
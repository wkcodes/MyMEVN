const router = require('express').Router();
const Thing = require('../models/thing.js');

let howdy = "howdy";

// Get 
router.get('/howdy', async (req, res) => {
    res.status(200).send(howdy);
    console.log(howdy)
});

// Post
router.post('/createThing', (req, res) => {
    
    let things = {
        title: "anutha one",
        description: "second test"
    }
    Thing.create(things).then((data) => {
        res.send(data)
    });
})

router.get("/findAll", (req, res) => {
    Thing.find({}).then((data) => {
        res.send(data)
    })
    //Model.find(req)
})

module.exports = router; 
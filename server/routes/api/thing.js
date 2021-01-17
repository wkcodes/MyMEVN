const router = require('express').Router();
const Thing = require('../../models/thing.js');

let howdy = "howdy";

// Howdy
router.get('/howdy', async (req, res) => {
    res.status(200).send(howdy);
    console.log(howdy)
});

// Post
router.post('/createThing', (req, res) => {
    console.log(req.body)
    let things = {
        title: "should be thefourth one",
        description: "tttt"
    }
    Thing.create(things).then((data) => {
        res.send(data)
    });
})

router.get("/findAll", async (req, res) => {
    Thing.find({}).then((data) => {
        res.json(data)
    })
})

module.exports = router; 
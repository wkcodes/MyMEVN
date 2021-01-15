const router = require('express').Router();

let aye = { greeting: "ayyye", name: "spuds"}
let howdy = "howdy";

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
router.post('/thing', (req, res) => {
  
})

router.get("/findAll", (req, res) => {
    Post.find({})
})

module.exports = router; 
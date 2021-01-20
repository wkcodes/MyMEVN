const router = require('express').Router();
const Thing = require('../../models/thing.js');

let howdy = "howdy";

// Howdy
router.get('/howdy', async (req, res) => {
    res.status(200).send(howdy);
    console.log(howdy)
});

// Post
router.post('/createThing',  (req, res) => {
    console.log(req.body)
    let things = {
        title: "should be thefourth one",
        description: "tttt"
    }
    Thing.create(things).then((data) => {
        res.send(data)
    });
})

router.get("/findAllThings", async (req, res) => {
    Thing.find({}).then((data) => {
        res.json(data)
    })
})

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://hargrimm-wikihow-v1.p.rapidapi.com/steps',
  params: {count: '3'},
  headers: {
    'x-rapidapi-key': '57efff2aa5msha7b1ef55b66c789p1cd9fbjsnd90eb24361fb',
    'x-rapidapi-host': 'hargrimm-wikihow-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

module.exports = router; 
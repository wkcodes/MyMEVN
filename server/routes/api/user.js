const router = require('express').Router();
const User = require('../../models/user.js');

router.post('/login', (req, res) => {
    console.log(req.body)
})

router.get('/login', async (req, res) => {
    res.send('login hit')
    console.log('login')
})

module.exports = router
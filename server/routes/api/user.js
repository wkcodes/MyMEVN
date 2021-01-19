const router = require('express').Router();
const User = require('../../models/user.js');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../../../config/passport.js');

// generate jwt
// eslint-disable-next-line no-undef
genToken = (user) => {
  return jwt.sign(
    {
      iss: 'Joan_Louji',
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    'joanlouji'
  );
};

// register user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // check if user exists
  let foundUser = await User.findOne({ email });
  if (foundUser) {
    return res.status(403).json({ error: 'Email is already in use' });
  }

  const newUser = new User({ email, password });
  await newUser.save();

  // eslint-disable-next-line no-undef
  const token = genToken(newUser);
  res.status(200).json({ token });
});

// get login
router.get('/login', async (req, res) => {
  res.send('login hit');
  console.log('login');
});

// secret route, only accessible with jwt
router.get(
  '/secret',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    res.json('Secret Data');
  }
);

// get all users
router.get('/findAllUsers', async (req, res) => {
  try {
    User.find({}).then((data) => {
      res.json(data);
    });
  } catch {
    res.status(500);
  }
});

module.exports = router;

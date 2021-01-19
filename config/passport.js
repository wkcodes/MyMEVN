const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
// correct routes
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../server/models/user');

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'joanlouji',
    },
    function (jwtPayload, done) {
      return User.findById(jwtPayload.sub)
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);

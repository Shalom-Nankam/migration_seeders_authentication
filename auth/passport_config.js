const JwtStrategy = require("passport-jwt").Strategy;

const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/user");
const users = require("./auth_router").users;

require("dotenv").config();

const customOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(customOptions, async function (data, done) {
      const user = await User.findOne({
        where: {
          email: data.email,
        },
      });
      //   const user = users.find((user) => user.username == data.username);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
  );
};

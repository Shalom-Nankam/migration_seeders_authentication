const JwtStrategy = require("passport-jwt").Strategy;

const ExtractJwt = require("passport-jwt").ExtractJwt;

const UserModel = require("../models/user");
require("dotenv").config();

const customOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(customOptions, async function (data, done) {
      const user = await UserModel.findOne({
        email: data.email,
      });
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
  );
};

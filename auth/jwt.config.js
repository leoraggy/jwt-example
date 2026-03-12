import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import usersRepo from "../repo/users.repo.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(options, (payload, done) => {
    const user = usersRepo.find((user) => user.username === payload.username);

    if (!user) done(null, false);
    else done(null, user);
  }),
);

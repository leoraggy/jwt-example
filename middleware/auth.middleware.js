import passport from "passport";

export const checkJWT = passport.authenticate("jwt", { session: false });

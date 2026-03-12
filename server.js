import express from "express";
import router from "./routes/api.routes.js";
import "./auth/jwt.config.js";
import passport from "passport";

const app = express();

app.use(express.json());

app.use(passport.initialize());


app.use("/api", router);

const PORT = 3000;

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));

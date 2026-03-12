import { Router } from "express";
import { getHotels, login } from "../controller/api.controller.js";
import { checkJWT } from "../middleware/auth.middleware.js";
const router = Router();

//routes
router.post("/login", login);
router.get("/hotels", checkJWT, getHotels);

export default router;

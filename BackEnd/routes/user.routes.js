import express from "express";
import { allUsers, login, signUp } from "../controller/User.controller.js";
// import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();
router.post("/signup",signUp);
router.post("/login",login);
router.get("/allUsers"/*secureRoute*/, allUsers);

export default router; 
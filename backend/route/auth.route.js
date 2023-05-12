import express from "express";
import {Signup,Login,Logout} from "../controller/auth.controller.js"
const router = express.Router();

// Creating a User
router.post("/signup",Signup);

//Log IN
router.post("/login",Login);

//Log OUT
router.post("/logout",Logout);



export default router;
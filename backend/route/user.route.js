import express from "express";
import {deleteUser,updateUser,GetAUser} from "../controller/user.controller.js"
import { verifyToken } from "../middleware.js";
const router = express.Router();

// Creating a User
router.put("/user/:id",verifyToken,updateUser);

//Log IN
router.delete("/user/:id",verifyToken,deleteUser);

//Log IN
router.get("/user/:id",verifyToken,GetAUser);

export default router;
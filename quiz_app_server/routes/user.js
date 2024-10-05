import express from 'express'
import { createUser, getUser, loginUser, logoutUser } from '../controllers/user.js';

const router = express.Router();


router.post("/logout", logoutUser);
router.post("/auth", loginUser)
router.post("/register", createUser);
router.get("/", getUser);


export default router; 
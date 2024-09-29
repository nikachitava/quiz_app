import express from 'express'
import { createUser, getUser, loginUser, logoutUser } from '../controllers/user.js';

const router = express.Router();


router.post("/logout", logoutUser);
router.post("/auth", loginUser)
router.post("/", createUser);
router.get("/", getUser);


export default router; 
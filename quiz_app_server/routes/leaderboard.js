import express from 'express';
import { getLeaderBoardData, addUserLeaderBoard } from '../controllers/leaderboard.js';

const router = express.Router();

router.get("/", getLeaderBoardData);
router.post("/", addUserLeaderBoard);


export default router;
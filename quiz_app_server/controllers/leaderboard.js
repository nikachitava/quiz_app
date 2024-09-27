import LeaderBoard from "../models/leaderboard.model.js";
import User from "../models/user.model.js";

export const getLeaderBoardData = async (req, res) => {
	try {
		const response = await LeaderBoard.find({});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const addUserLeaderBoard = async (req, res) => {
	try {
		const { userID, points } = req.body;

		const userExists = await User.findById(userID);
		if (!userExists) {
			throw new Error("User not found");
		}

		const response = await LeaderBoard.findOneAndUpdate(
			{ user: userID },
			{
				$inc: { points: points },
				$setOnInsert: { user: userID },
			},
			{ upsert: true, new: true, setDefaultsOnInsert: true }
		);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (!user)
			return res
				.status(400)
				.json({ message: "Account with this email doesn't exists" });
		if (user.password !== req.body.password)
			return res.status(400).json({ message: "Wrong password" });

		const token = jwt.sign({id: user._id}, "secretkey")

		const {password, ...others} = user._doc;

		res.cookie("accessToken", token, {
		    httpOnly: true,
		}).status(200).json(others);


	} catch (error) {
		console.log(error);
	}
};

export const logoutUser = (req, res) => {
	res.clearCookie("accessToken", {
		secure: true,
		sameSite: "none",
	})
		.status(200)
		.json("User has beed logged out");
};

export const createUser = async (req, res) => {
	try {
		const { name, surname, email, password } = req.body;

		const user = await User.findOne({ email });
		if (user)
			return res
				.status(400)
				.json({ meessage: "This email already used." });

		await User.create({ name, surname, email, password });
		res.status(200).json("User created successfully");
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getUser = async (req, res) => {
	try {
		const response = await User.find({});
		res.status(200).json(response);
	} catch (error) {
		console.log(error);
	}
};

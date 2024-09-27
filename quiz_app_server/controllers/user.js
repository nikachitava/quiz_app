import User from "../models/user.model.js"

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        const response = await User.find({});
        res.status(200).json(response)

    } catch (error) {
        console.log(error)
    }
}
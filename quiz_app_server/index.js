import express from 'express'
import mongoose from 'mongoose';
import User from "./models/user.model.js"

const app = express();

app.use(express.json())

app.post("/user", async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


mongoose.connect("mongodb+srv://quizappuser:quizapppassword@quizzapp.tyxev.mongodb.net/quizapp?retryWrites=true&w=majority&appName=quizzapp")
.then(() => {
    console.log("Dabatase connected successfully")
    app.listen(3000, () => {
        console.log("server is running")
    })
}).catch((err) => {
    console.log("Connection failed:", err)
});
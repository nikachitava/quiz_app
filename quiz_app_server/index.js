import express from 'express'
import mongoose from 'mongoose';

import userRoutes from './routes/user.js'

const app = express();

app.use(express.json())

app.use("/user", userRoutes);


mongoose.connect("mongodb+srv://quizappuser:quizapppassword@quizzapp.tyxev.mongodb.net/quizapp?retryWrites=true&w=majority&appName=quizzapp")
.then(() => {
    console.log("Dabatase connected successfully")
    app.listen(3000, () => {
        console.log("server is running")
    })
}).catch((err) => {
    console.log("Connection failed:", err)
});
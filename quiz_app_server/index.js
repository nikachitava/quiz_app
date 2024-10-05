import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'


import userRoutes from './routes/user.js'
import leaderBoardRoutes from './routes/leaderboard.js'

const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
        
    })
);
app.use(express.json())

app.use("/user", userRoutes);
app.use("/leaderboard", leaderBoardRoutes)


mongoose.connect("mongodb+srv://quizappuser:quizapppassword@quizzapp.tyxev.mongodb.net/quizapp?retryWrites=true&w=majority&appName=quizzapp")
.then(() => {
    console.log("Dabatase connected successfully")
    app.listen(3000, () => {
        console.log("server is running")
    })
}).catch((err) => {
    console.log("Connection failed:", err)
});
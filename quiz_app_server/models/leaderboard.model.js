import mongoose from "mongoose";

const LeaderBoardSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    },
    points: {
        type: Number,
        required: true,
        default: 0
    }
})

const LeaderBoard = mongoose.model("LeaderBoard", LeaderBoardSchema);
export default LeaderBoard;
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    surname: {
        type: String,
        required: [true, "Surname is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },

}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema)
export default User;
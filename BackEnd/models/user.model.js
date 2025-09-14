import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        //it should not be requires field here, will handle it in the UI
    },
}, { timestamps: true }); // createdAt & updatedAt- > 2fields are there

const User = mongoose.model("User", userSchema);
export default User;
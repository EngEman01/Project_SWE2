import mongoose, { Schema, model } from "mongoose";

const linkdb = "mongodb://127.0.0.1:27017/project";

const doctor = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    subject: {
        type: Schema.Types.ObjectId,
        required: false,
        ref:'subject'
    },
}, { timestamps: true, })


export default model ('doctor' ,doctor);

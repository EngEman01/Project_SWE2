import { Schema ,model } from "mongoose";


const student = new Schema ({
    username: {
        type: String
    },
    email: {
        type: String
    },
    academicNumber: {
        type: String
    },
    password: {
        type: String
    },

}, { timestamps: true, } )

export default model ('student' ,student);
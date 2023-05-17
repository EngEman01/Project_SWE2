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

// const Doctor = mongoose.model("doctor", doctors);


// exports.createDoctor = (username, email, password, subject) => {


//     return new Promise((resolve, reject) => {
//         mongoose
//             .connect(linkdb)
//             .then(() => {
//                 return Doctor.findOne({ email: email });
//             })
//             .then((doctor) => {
//                 if (doctor) {
//                     mongoose.disconnect()
//                     reject("email is used");
//                 }
//                 else {
//                     return bcrypt.hash(password, 10)
//                 }
//             }).then(hashedPassword => {
//                 let doctor = new Doctor({
//                     username: username,
//                     email: email,
//                     password: password,
//                     subject: subject
//                 })
//                 return doctor.save()
//             }).then(() => {
//                 mongoose.disconnect()
//                 resolve();
//             }).catch(err => {
//                 mongoose.disconnect()
//                 reject(err)
//             })
//     })
// };
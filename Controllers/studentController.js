import student from "../models/student.js";

export const getStudent = async (req, res, next) => {
    const students = await student.find().lean();
    res.render('auth/AccountStudent');
};

export const postStudent = async (req, res, next) => {
    const { username, email, academicNumber, password } = req.body;

    await student.create({
        username,
        email,
        academicNumber,
        password

    });

    console.log(req.body);
};
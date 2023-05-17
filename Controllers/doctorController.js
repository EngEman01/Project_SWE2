// const doctors = require("../models/doctor");
import doctor from "../models/doctor.js";
import subject from "../models/subject.js";


export const showSubject = async (req, res) => {

    const subjects = await subject.find({}, { name: 1 }).lean();
    res.render('auth/AccountDoctor', { subjects });
};


export const getDoctor = async (req, res, next) => {
    const doctors = await doctor.find().lean();
    res.render("auth/AccountDoctor");
};


export const postDoctor = async (req, res, next) => {
    const { username, email, password, subject } = req.body;

    await doctor.create({
        username,
        email,
        password,
        subject
    });

}


export const getLogin = async (req, res, next) => {
    // const doctors = await doctor.find().lean();
    res.render('auth/Login');
};

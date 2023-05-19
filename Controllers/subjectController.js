import subject from "../models/subject.js";
import department from "../models/departments.js";

export const showDepartment = async (req, res) => {
    const departments = await department.find({}, { name: 1 }).lean();
    res.render('subjects/create', { departments });
};


export const index = async (req, res) => {

    const subjects = await subject.find({}, { name: 1 }).lean();
    res.render('subjects/index', { subjects });
    
};

export const create = async (req, res) => {
    const departments = await department.find().lean();
    res.render('subjects/create', departments);
};

export const store = async (req, res) => {
    const { name, code, department } = req.body;
    console.log ({ name, code, department });
    await subject.create({
        name,
        code,
        department
    });
    res.redirect('/subjects')
};

export const show = async (req, res) => {
    const { _id } = req.params;
    const singleSubject = await subject.findById({_id}).populate('department').lean();
    res.redirect('subjects/show', { subject: singleSubject });
};
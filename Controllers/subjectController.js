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
    await subject.create({
        name,
        code,
        department
    });
    res.redirect('/subjects')
};

export const editSubject = async (req, res) => {
    const { _id } = req.params;
    const editFormSubject = await subject.findById(_id).lean();
    const departments = await department.find().lean();
    res.render('subjects/edit', { departments , subject: editFormSubject } );
};

export const updateSubject = async (req, res) => {
    const { name, code, department } = req.body;
    const { _id } = req.params;

    await subject.findByIdAndUpdate(_id , 
        {$set: { name, code, department },
    });
    
    res.redirect('/subjects')
};

export const show = async (req, res) => {
    const { _id } = req.params;
    const singleSubject = await subject.findById(_id).populate('department').lean();
    res.render('subjects/show', { subject: singleSubject });
};

export const deleteSubject = async (req, res) => {
    const { _id } = req.params;

    await subject.findByIdAndDelete(_id);
    
    res.redirect('/subjects')
};
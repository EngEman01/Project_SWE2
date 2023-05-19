import department from "../models/departments.js";



export const index = async (req, res) => {

    const departments = await department.find({}, { name: 1 }).lean();
    res.render('departments/index', { departments });
};

export const create = async (req, res) => {
    const departments = await department.find().lean();
    res.render('departments/create', departments);
};

export const store = async (req, res) => {
    const { name, code} = req.body;
    console.log ({ name, code});
    await department.create({
        name,
        code
    });
    res.redirect('/departments')
};

export const show = async (req, res) => {
    const { _id } = req.params;
    const singleDepartment = await department.findById({_id}).lean();
    res.redirect('departments/show', { department: singleDepartment });
};
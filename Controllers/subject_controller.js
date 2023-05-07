import subject from "../models/subject.js";
import department from "../models/department.js";
export const index =  async (req, res) => {

    const subjects = await subject.find({}, { name : 1}).lean();

    res.render ('subjects/index' , { subjects });
};

export const create = async (req, res)=> {
    const departments = await department.find().lean();
    
    res.render('subject/create',departments );
};

export const store = async(req, res)=> {
const{name ,code ,department} = req.body;

 await subject.create({
name,
code,
department

});

};

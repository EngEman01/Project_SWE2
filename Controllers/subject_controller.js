import subject from "../models/subject.js";

export const index =  async (req, res) => {

    const subjects = await subject.find().lean();

    res.render ('subjects/all' , { subjects })
}
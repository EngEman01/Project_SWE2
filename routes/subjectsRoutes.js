import { Router } from "express"
import
{ 
    create,
    index,
    store,
    show,
    editSubject,
    updateSubject,
    showDepartment,
    deleteSubject
} from "../Controllers/subjectController.js";
import subject from "../models/subject.js";
import { showSubject } from "../Controllers/doctorController.js";


const router = new Router();

router.get('/create',showDepartment)
router.get('/',index);
router.get('/create',create);
router.post('/' , store);
router.get('/:_id/edit' , editSubject);
router.put('/:_id' , updateSubject);
router.get('/:_id' , show);
router.delete('/:_id' , deleteSubject);



export default router;
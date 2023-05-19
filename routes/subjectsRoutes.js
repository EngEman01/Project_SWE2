import { Router } from "express"
import { create, index, store ,show ,showDepartment} from "../Controllers/subjectController.js";
import subject from "../models/subject.js";
import { showSubject } from "../Controllers/doctorController.js";


const router = new Router();


router.get('/',index);
router.get('/create',create);
router.post('/' , store);
router.get('/:_id' , show);
router.get('/create',showDepartment)


export default router;
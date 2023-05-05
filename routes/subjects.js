import { Router } from "express"
import { index } from "../Controllers/subject_controller.js";
import department from "../models/departments.js";
import subject from "../models/subject.js";


const router = new Router();

router.get('/',index);
export default router;
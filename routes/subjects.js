import { Router } from "express"
import { create, index } from "../Controllers/subject_controller.js";



const router = new Router();

router.get('/',index);
router.get('/create',create);
router.post('/' , store);

export default router;
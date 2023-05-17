import { Router } from "express";
import {getStudent,postStudent} from "../Controllers/studentController.js"

const router = new Router();

router.get('/createAccountStudent',getStudent);
router.post('/', postStudent);

export default router;
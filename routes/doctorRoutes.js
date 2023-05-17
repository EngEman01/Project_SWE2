import { Router } from "express";
import subject from "../models/subject.js";
import  { getDoctor, postDoctor,getLogin ,showSubject}   from "../Controllers/doctorController.js";



const router = new Router();

router.get('/AccountDoctor',showSubject)

router.get('/AccountDoctor',getDoctor);
router.post('/' , postDoctor);



router.get('/Login',getLogin);

export default router;

// router.get("/createAccountDoctor",getDoctor);

// router.post(
//     "/AccountDoctor",
//     bodyParser.urlencoded({ extended:true }),
//     postDoctor
// );

// router.post(
//     "/AccountStudent",
//     bodyParser.urlencoded({ extended:true }),
//     postStudent
// );




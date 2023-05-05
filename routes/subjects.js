import { Router } from "express"



const router = new Router ();


router.get ('/', (req, res) => {
    res.render ('departments/all')
});

router.get ('/', (req, res) => {
    res.render ('subjects/all')
});


export default router ;
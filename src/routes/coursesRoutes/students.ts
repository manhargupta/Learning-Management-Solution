/**
 * Author : Manhar Gupta
 */
import express,{Request,Response} from 'express'
import {
    BatchesService
} from "../../models/CoursesRouteActions/batchesActions";
let route: express.Router = express.Router({mergeParams: true});

route.get('/', (req:Request, res:Response) => {

    BatchesService.getBatchTeachers(req.params.id,req.params.bid).then((batch:any)=>{
        res.status(200).send(batch.lectures);
    })
});
export default route
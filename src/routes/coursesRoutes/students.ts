/**
 * Author : Manhar Gupta
 */
import express,{Request,Response} from 'express'
import {
    BatchesService
} from "../../models/CoursesRouteActions/batchesActions";
import {IBatch, IStudent} from "../../models/modelsI";
let route: express.Router = express.Router({mergeParams: true});

route.get('/', (req:Request, res:Response) => {

        BatchesService.getBatchStudents(req.params.id,req.params.bid).then((students:IBatch[]|null)=>{
            res.status(200).send(students);
        })
});
export default route
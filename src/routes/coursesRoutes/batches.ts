/**
 * Author : Manhar Gupta
 */
import express,{Request,Response} from 'express'
import {
    BatchesService
} from "../../models/CoursesRouteActions/batchesActions";
import {IBatch} from "../../models/modelsI";
let route: express.Router = express.Router({mergeParams: true});

import lecturesRoute from './lectures'
import teachersRoute from "./teachers";


const routes_ = {
    lecture:lecturesRoute,
    teacher:teachersRoute
}




route.get('/', (req:Request, res:Response) => {
    BatchesService.getBatches(req.params.id).then((batch:IBatch[]|null)=>{
        res.status(200).send(batch);
    })
});

route.post('/', (req:Request, res:Response) => {
    let newBatch:IBatch={
        id:0,
        name:req.body.name
    }
    BatchesService.addBatch(req.params.id,newBatch).then((batch:IBatch|null)=>{
        res.status(200).send(batch);
    })
});

route.get('/:bid', (req:Request, res:Response) => {

    BatchesService.getBatchById(req.params.id,req.params.bid).then((batch:IBatch|null)=>{
        res.status(200).send(batch);
    })
});
route.use('/:bid/lectures',routes_.lecture)
route.use('/:bid/teachers',routes_.teacher)
route.use('/:bid/students',routes_.teacher)


export default route
/**
 * Author : Manhar Gupta
 */
import express,{Request,Response} from 'express'
import {
    BatchesService
} from "../../models/CoursesRouteActions/batchesActions";
import {IBatch, ICourse} from "../../models/modelsI";
let route: express.Router = express.Router({mergeParams: true});

import lecturesRoute from './lectures'
import teachersRoute from "./teachers";
import studentsRoute from "./students";
import createError from "../../utilities/functions";
import {CourseService} from "../../models/CoursesRouteActions/coursesActions";


const routes_ = {
    lecture:lecturesRoute,
    teacher:teachersRoute,
    student:studentsRoute
}



/*  get Request
    path :- /courses/1/batches
 */
route.get('/', (req:Request, res:Response) => {
    BatchesService.getBatches(req.params.id).then((batch:IBatch[]|null)=>{
        res.status(200).send(batch);
    })
});

/*  post Request
    path :- /courses/1/batches
 */
route.post('/', (req:Request, res:Response) => {
    let newBatch:IBatch={
        id:0,
        name:req.body.name,
        batchdate:req.body.batchdate
    }
    BatchesService.addBatch(req.params.id,newBatch).then((batch:IBatch|null)=>{
        res.status(200).send(batch);
    })
});

/*  get Request
    path :- /courses/1/batches/1
 */
route.get('/:bid', (req:Request, res:Response) => {

    BatchesService.getBatchById(req.params.id,req.params.bid).then((batch:IBatch|null)=>{
        res.status(200).send(batch);
    })
});

/*  update Request
    path :- /courses/1/batches/1
 */
route.put('/:bid', (req:Request, res:Response) => {
    let updateBatch:IBatch={
        id:req.params.bid,
        name:req.body.name,
        batchdate:req.body.batchdate
    }
    BatchesService.updateBatch(updateBatch).then((batch:[number,IBatch[]])=>{
        if (batch[0]==0)
            throw Error("Update failed No Batch found for id "+updateBatch.id);
        res.status(200).json(batch);
    }).catch(err => {
        res.status(400).json(createError(err.toString()));
    })
});

/*  delete Request
    path :- /courses/1/batches/1
 */
route.delete('/:bid', (req:Request, res:Response) => {
    let deleteBatch:IBatch={
        id:req.params.bid,
        name:'',
        batchdate:''

    }
    BatchesService.deleteBatch(deleteBatch).then((batch:number)=>{
        if (batch==0)
            throw Error("delete failed No Courses found for id "+deleteBatch.id);
        res.status(200).json(batch);
    }).catch(err => {
        res.status(400).json(createError(err.toString()));
    })
});

route.use('/:bid/lectures',routes_.lecture)
route.use('/:bid/teachers',routes_.teacher)
route.use('/:bid/students',routes_.student)


export default route
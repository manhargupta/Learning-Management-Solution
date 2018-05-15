/**
 * Author : Manhar Gupta
 */
import express,{Request,Response} from 'express'
import {
    LectureService
} from "../../models/CoursesRouteActions/lectureActions";
import {IBatch,Ilecture} from "../../models/modelsI";
import createError from "../../utilities/functions";
import {BatchesService} from "../../models/CoursesRouteActions/batchesActions";
let route: express.Router = express.Router({mergeParams: true});

route.get('/', (req:Request, res:Response) => {

    LectureService.getLectures(req.params.id,req.params.bid).then((batch:IBatch|null)=>{
        res.status(200).send(batch);
    })
});

route.get('/:lid', (req:Request, res:Response) => {

    LectureService.getLectureById(req.params.id,req.params.bid,req.params.lid).then((batch:IBatch|null)=>{
        res.status(200).send(batch);
    })
});

/*  update Request
    path :- /courses/1/batches/1
 */
route.put('/:lid', (req:Request, res:Response) => {
    let updateLecture:IBatch={
        id:req.params.lid,
        name:req.body.name
    }
    LectureService.updateLecture(updateLecture).then((batch:[number,Ilecture[]])=>{
        if (batch[0]==0)
            throw Error("Update failed No Lecture found for id "+updateLecture.id);
        res.status(200).json(batch);
    }).catch(err => {
        res.status(400).json(createError(err.toString()));
    })
});

/*  delete Request
    path :- /courses/1/batches/1
 */
route.delete('/:lid', (req:Request, res:Response) => {
    let updateLecture:IBatch={
        id:req.params.lid,
        name:''
    }
    LectureService.deleteLecture(updateLecture).then((batch:number)=>{
        if (batch==0)
            throw Error("delete failed No Courses found for id "+updateLecture.id);
        res.status(200).json(batch);
    }).catch(err => {
        res.status(400).json(createError(err.toString()));
    })
});

route.post('/:tid', (req:Request, res:Response) => {
    let newLecture:Ilecture={
        id:0,
        name:req.body.name,
    }
    LectureService.addLecture(req.params.id,req.params.bid,req.params.tid,newLecture).then((lecture:Ilecture|null)=>{
        res.status(200).send(lecture);
    })
});
export default route
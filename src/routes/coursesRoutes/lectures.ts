/**
 * Author : Manhar Gupta
 */
import express,{Request,Response} from 'express'
import {
    LectureService
} from "../../models/CoursesRouteActions/lectureActions";
import {IBatch,Ilecture} from "../../models/modelsI";
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

route.post('/:sid/:tid', (req:Request, res:Response) => {
    let newLecture:Ilecture={
        id:0,
        name:req.body.name,
    }
    LectureService.addLecture(req.params.id,req.params.bid,req.params.sid,req.params.tid,newLecture).then((lecture:Ilecture|null)=>{
        res.status(200).send(lecture);
    })
});
export default route
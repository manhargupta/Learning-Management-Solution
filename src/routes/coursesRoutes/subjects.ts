/**
 * Author : Manhar Gupta
 */
import express,{Request,Response} from 'express'
import {
   SubjectService
} from "../../models/CoursesRouteActions/subjectActions";
import {ISubject,} from "../../models/modelsI";
let route: express.Router = express.Router({mergeParams: true});

route.get('/', (req:Request, res:Response) => {

    SubjectService.getSubjects(req.params.id).then((subject:ISubject[]|null)=>{
        res.status(200).send(subject);
    })
});

route.get('/:sid', (req:Request, res:Response) => {

    SubjectService.getCourseSubjectById(req.params.id,req.params.sid).then((subject:ISubject|null)=>{
        res.status(200).send(subject);
    })
});

route.post('/', (req:Request, res:Response) => {

    let newSubject:ISubject={
        id:0,
        name:req.body.name
    }
    SubjectService.addSubject(req.params.id,newSubject).then((subject:ISubject|null)=>{
        res.status(200).send(subject);
    })
});

export default route
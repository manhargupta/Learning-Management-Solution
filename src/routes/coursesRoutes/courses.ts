/**
 * Author : Manhar Gupta
 */
import express,{Request,Response} from 'express'
import {
    CourseService
} from "../../models/CoursesRouteActions/coursesActions";
import {ICourse} from "../../models/modelsI";
let route: express.Router = express.Router({mergeParams: true});

import batchesRoute from './batches'
import subjectsRoute from './subjects'

const routes_ = {
    batch : batchesRoute,
    subjects:subjectsRoute
}

route.get('/', (req:Request, res:Response) => {

    CourseService.getCourses().then((courses:ICourse[]|null)=>{
        res.status(200).send(courses);
    })
});

route.post('/', (req:Request, res:Response) => {
    let newCourse:ICourse={
        id:0,
        name:req.body.name
    }
    CourseService.addCourses(newCourse).then((course:ICourse|null)=>{
        res.status(200).send(course);
    })
});

route.get('/:id', (req:Request, res:Response) => {

    CourseService.getCoursesById(req.params.id).then((courses:ICourse|null)=>{
        res.status(200).send(courses);
    })
});
route.use('/:id/batches',routes_.batch)
route.use('/:id/subjects',routes_.subjects)


export default route
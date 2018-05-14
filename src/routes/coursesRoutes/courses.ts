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
import createError from "../../utilities/functions";

const routes_ = {
    batch : batchesRoute,
    subjects:subjectsRoute
}

/*  Get Request
    path :- /courses/
 */
route.get('/', (req:Request, res:Response) => {

    CourseService.getCourses().then((courses:ICourse[]|null)=>{
        res.status(200).send(courses);
    })
});

/*  Post Request
    path :- /courses/
 */
route.post('/', (req:Request, res:Response) => {
    let newCourse:ICourse={
        id:0,
        name:req.body.name
    }
    CourseService.addCourses(newCourse).then((course:ICourse|null)=>{
        res.status(200).send(course);
    })
});


/*  Get Request
    path :- /courses/1
 */
route.get('/:id', (req:Request, res:Response) => {

    CourseService.getCoursesById(req.params.id).then((courses:ICourse|null)=>{
        res.status(200).send(courses);
    })
});


/*  update Request
    path :- /courses/
 */
route.put('/:id', (req:Request, res:Response) => {
    let updateCourse:ICourse={
        id:req.params.id,
        name:req.body.name
    }
    CourseService.updateCourses(updateCourse).then((course:[number,ICourse[]])=>{
        if (course[0]==0)
            throw Error("Update failed No Courses found for id "+updateCourse.id);
        res.status(200).json(course);
    }).catch(err => {
        res.status(400).json(createError(err.toString()));
    })
});

/*  delete Request
    path :- /courses/
 */
route.delete('/:id', (req:Request, res:Response) => {
    let deleteCourse:ICourse={
        id:req.params.id,
        name:''
    }
    CourseService.deleteCourses(deleteCourse).then((course:number)=>{
        if (course==0)
            throw Error("delete failed No Courses found for id "+deleteCourse.id);
        res.status(200).json(course);
    }).catch(err => {
        res.status(400).json(createError(err.toString()));
    })
});
route.use('/:id/batches',routes_.batch)
route.use('/:id/subjects',routes_.subjects)


export default route
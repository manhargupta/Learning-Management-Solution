/**
 * Author : Manhar Gupta
 */
import express,{Request,Response} from 'express'
import {
    addBatch,
    addCourses,
    getBatcheById,
    getBatches,
    getCourses,
    getCoursesById,
    getLectures
} from "../models/coursesAction";
import {IBatch, ICourse} from "../models/modelsI";
let route: express.Router = express.Router();

route.get('/', (req, res) => {

    getCourses().then((courses:ICourse[]|null)=>{
        res.status(200).send(courses);
    })
});

route.post('/', (req, res) => {
    let newCourse:ICourse={
        id:0,
        name:req.body.name
    }
    addCourses(newCourse).then((course:ICourse|null)=>{
        res.status(200).send(course);
    })
});

route.get('/:id', (req, res) => {

    getCoursesById(req.params.id).then((courses:ICourse|null)=>{
        res.status(200).send(courses);
    })
});

route.get('/:id/batches', (req, res) => {

    getBatches(req.params.id).then((batch:IBatch[]|null)=>{
        res.status(200).send(batch);
    })
});

route.post('/:id/batches', (req, res) => {
    let newBatch:IBatch={
        id:0,
        name:req.body.name
    }
    addBatch(req.params.id,newBatch).then((batch:IBatch|null)=>{
        res.status(200).send(batch);
    })
});

route.get('/:id/batches/:bid', (req, res) => {

    getBatcheById(req.params.id,req.params.bid).then((batch:IBatch|null)=>{
        res.status(200).send(batch);
    })
});

route.get('/:id/batches/:bid/lectures', (req, res) => {

    getLectures(req.params.id,req.params.bid).then((batch:IBatch|null)=>{
        res.status(200).send(batch);
    })
});


export default route
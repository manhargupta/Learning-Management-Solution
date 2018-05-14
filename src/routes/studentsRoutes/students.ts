import express, {Request, Response} from 'express';

import {BatchesService} from "../../models/CoursesRouteActions/batchesActions";

import {
    StudentService
} from "../../models/StudentsRouteActions/studentsActions";
import {IBatch, IStudent} from "../../models/modelsI";

import createError from '../../utilities/functions'

let route: express.Router = express.Router();


/////////////////////////
///students/
////////////////////////
route.get('/', (req: Request, res: Response) => {
    StudentService.getStudents().then((students: IStudent[] | null) => {
        res.status(200).json(students);
    })
})


route.post('/:cid/:bid', (req: Request, res: Response) => {

    let newStudent:IStudent={
        id:0,
        name:req.body.name
    }

    BatchesService.getBatchById(req.params.cid, req.params.bid).then((batch: IBatch | null) => {
        StudentService.addStudent(newStudent, batch).then((student: IStudent | null) => {
            res.status(200).json(student);
        })
    })

})


/////////////////////////
///students/:id
////////////////////////
route.get('/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    StudentService.getStudentById(id).then((student: IStudent | null) => {
        res.status(200).json(student);
    })
})


route.delete('/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    try {
        StudentService.deleteUserById(id).then((result: number | null) => {
            if (result === 0) throw Error('No Student found for id ' + id);
            res.status(200).json({
                success: true,
                id: result
            });
        }).catch(err => {
            res.status(400).json(createError(err.toString()));
        })
    } catch (err) {
        res.status(400).json(createError(err.toString()));
    }

})

route.put('/:id', (req: Request, res: Response) => {
    let updateStudent:IStudent={
        id:req.params.id,
        name:req.body.name
    }

    StudentService.updateStudent(updateStudent).then((result) => {
        if (result == 0)
            throw Error("Update failed No Student found for id" + updateStudent.id);
        res.status(200).json(result);
    }).catch(err => {
        res.status(400).json(createError(err.toString()));
    })

})

/////////////////////////
//students/:id/batches
////////////////////////

route.get("/:id/batches", (req: Request, res: Response) => {
    let id = req.params.id;
    StudentService.getStudentBatches(id).then((student: IStudent[] | null) => {
        res.status(200).json(student);
    })
})


route.post("/:id/courses/:cid/batches/:bid", (req: Request, res: Response) => {
    let id = req.params.id;
    let bid = req.params.bid;
    let cid = req.params.cid;

    BatchesService.getBatchById(cid, bid).then((batch: IBatch | null) => {
        StudentService.getStudentById(id).then((student: IStudent | null) => {
            StudentService.addStudentToBatch(student, batch).then((result: any) => {
                console.log(result)
                res.json(result);
            })
        })
    })

})


export default route
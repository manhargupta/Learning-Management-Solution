import express,{Request,Response} from 'express'
import {ITeacher} from "../../models/modelsI";
import {addTeacher, getTeachers} from "../../models/teachersRouteActions/teachersActions";
let route: express.Router = express.Router({mergeParams: true});

route.get('/', (req, res) => {

    getTeachers().then((teachers:ITeacher[]|null)=>{
        res.status(200).send(teachers);
    })
});

route.post('/:sid', (req, res) => {

    let newTeacher:ITeacher={
        id:0,
        name:req.body.name
    }
    addTeacher(newTeacher,req.params.sid).then((teacher:ITeacher|null)=>{
        res.status(200).send(teacher);
    })
});

export default route
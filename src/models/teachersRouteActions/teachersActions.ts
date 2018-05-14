import {SubjectService} from "../CoursesRouteActions/subjectActions";
import {models} from "../db";
import {ISubject, ITeacher} from "../modelsI";

export async function getTeachers():Promise<ISubject[] | null> {
    return await models.Teacher.findAll({
        include:[{
            model:models.Subject
        }]
    })
}

export async function getTeacherById(id:number):Promise<ITeacher | null> {
    return await models.Teacher.findById(id)
}

export function addTeacher(newTeacher:ITeacher,subjectId:number):Promise<ITeacher | null> {
    return new Promise<ITeacher|null>((resolve,reject)=> {
        models.Teacher.create({
            name: newTeacher.name
        }).then((teacher:any)=>{
            SubjectService.getSubjectById(subjectId).then((subject:any)=>{
                teacher.addSubject(subject)
                resolve(teacher)
            })
        })
    })
}
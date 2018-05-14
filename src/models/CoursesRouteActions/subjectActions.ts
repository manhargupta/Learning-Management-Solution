import {models} from "../db";
import {ISubject} from "../modelsI";
import {CourseService} from "./coursesActions";



export class SubjectService{
    public static async getSubjects(id:number):Promise<ISubject[] | null> {
        return await models.Course.findAll({
            where:{
                id:id
            },
            include:[{
                model:models.Subject,
            }]
        })
    }

    public static async getSubjectById(id:number):Promise<ISubject | null> {
        return await models.Subject.findById(id)
    }

    public static addSubject(courseId:number,newSubject:ISubject):Promise<ISubject | null> {
        return new Promise<ISubject|null>((resolve,reject)=>{
            models.Subject.create({
                name: newSubject.name
            }).then((subject:ISubject)=>{
                CourseService.getCoursesById(courseId).then((course:any)=>{
                    course.addSubject(subject)
                    resolve(subject)
                })
            })
        })
    }
}
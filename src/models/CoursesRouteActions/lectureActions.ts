import {IBatch, Ilecture} from "../modelsI";
import {models} from "../db";
import {BatchesService} from "./batchesActions";
import {SubjectService} from "./subjectActions";
import {getTeacherById} from "../teachersRouteActions/teachersActions";



export class LectureService {
    public static async getLectures(id:number,bid:number):Promise<IBatch | null> {
        return await models.Batch.findOne({
            where:{
                id:bid
            },
            attributes: [],
            include:[{
                model:models.Course,
                where:{
                    id:id
                },
                attributes: [],
            },{
                attributes:['id','name'],
                model:models.Lecture,
                include:[{
                    model:models.Subject
                },{
                    model:models.Teacher
                }]

            }]
        })
    }

    public static async getLectureById(id:number,bid:number,lectureId:number):Promise<IBatch | null> {
        return await models.Batch.findOne({
            where:{
                id:bid
            },
            attributes: [],
            include:[{
                model:models.Course,
                where:{
                    id:id
                },
                attributes: [],
            },{
                attributes:['id','name'],
                model:models.Lecture,
                where:{
                    id:lectureId
                },
                include:[{
                    model:models.Subject
                },{
                    model:models.Teacher
                }]
            }]
        })
    }

    public static addLecture(courseId:number,batchId:number,subjectId:number,teacherId:number,newlecture:Ilecture):Promise<Ilecture | null> {
        return new Promise<Ilecture|null>((resolve,reject)=>{
            models.Lecture.create({
                name: newlecture.name
            }).then((lecture:any)=>{
                BatchesService.getBatchById(courseId,batchId).then((batch:any)=>{
                    SubjectService.getSubjectById(subjectId).then((subject:any)=>{
                        getTeacherById(teacherId).then((teacher:any)=>{
                            batch.addLecture(lecture);
                            subject.setLecture(lecture)
                            teacher.setLecture(lecture)
                            resolve(lecture)
                        })
                    })
                })
            })
        })
    }

    public static async updateLecture(updateLecture:Ilecture):Promise<[number,Ilecture[]]> {
        return await models.Lecture.update({
            name: updateLecture.name
        }, {
            where: {
                id: updateLecture.id
            }
        });
    }

    public static async deleteLecture(deleteLecture:Ilecture):Promise<number> {
        return await models.Lecture.destroy({
            where: {
                id: deleteLecture.id
            }
        });
    }
}
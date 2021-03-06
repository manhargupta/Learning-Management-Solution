import {IBatch, ICourse, IStudent} from "../modelsI";
import {models} from "../db";
import {CourseService} from "./coursesActions";



export class BatchesService {
    public static async getBatches(id:number):Promise<IBatch[] | null> {
        return await models.Batch.findAll({
            include:[{
                model:models.Course,
                where:{
                    id:id
                },
                attributes: ['id','name'],
            }]
        })
    }

    public static async getBatchById(id:number,bid:number):Promise<IBatch | null> {
        return await models.Batch.findOne({
            where:{
                id:bid
            },
            include:[{
                model:models.Course,
                where:{
                    id:id
                },
                attributes: ['id','name'],
            }]
        })
    }

    public static async getBatchTeachers(id:number,bid:number):Promise<IBatch | null> {
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
                attributes:['teacherId'],
                model:models.Lecture,
                include:[{
                    attributes:['id','name'],
                    model:models.Teacher
                }]
            }]
        })
    }

    public static addBatch(batchId:number,newBatch:IBatch):Promise<IBatch | null> {
        return new Promise<IBatch|null>((resolve,reject)=>{
            models.Batch.create({
                name: newBatch.name,
                batchdate:newBatch.batchdate
            }).then((batch:IBatch)=>{
                CourseService.getCoursesById(batchId).then((course:any)=>{
                    course.addBatch(batch)
                    resolve(batch)
                })
            })
        })
    }

    public static async getBatchStudents(cid:number,bid:number): Promise<IBatch[] | null> {
        return await models.Batch.findAll({
            where:{
                id:bid
            },
            attributes:[],
            include: [{
                model: models.Course,
                where:{
                    id:cid
                },
                attributes:[]
            },{
                model:models.Student,
                attributes:['id','name']
            }]
        })
    }

    public static async updateBatch(updateBatch:IBatch):Promise<[number,IBatch[]]> {
        return await models.Batch.update({
            name: updateBatch.name,
            batchdate:updateBatch.batchdate
        }, {
            where: {
                id: updateBatch.id
            }
        });
    }

    public static async deleteBatch(deleteBatch:IBatch):Promise<number> {
        return await models.Batch.destroy({
            where: {
                id: deleteBatch.id
            }
        });
    }
}
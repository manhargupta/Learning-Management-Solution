import {IBatch, ICourse, IStudent} from "../modelsI";
import {models} from "../db";



export class BService {
    public static async getAllBatches():Promise<IBatch[] | null> {
        return await models.Batch.findAll({
            include:[{
                model:models.Course,
                attributes: ['id','name'],
            }]
        })
    }
}
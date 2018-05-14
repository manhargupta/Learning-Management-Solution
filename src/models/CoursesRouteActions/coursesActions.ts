/**
 * Author : Manhar Gupta
 */
import {models}  from '../db'
import {ICourse} from "../modelsI";
import {where} from "sequelize";

export class CourseService {
    public static async getCourses():Promise<ICourse[] | null> {
        return await models.Course.findAll({
            include:[{
                model:models.Batch,
                attributes: ['id','name'],
            }]
        })
    }

    public static async getCoursesById(id:number):Promise<ICourse | null> {
        return await models.Course.findById(id)
    }

    public static async addCourses(newCourse:ICourse):Promise<ICourse | null> {
        return await models.Course.create({
            name: newCourse.name
        })
    }
    public static async updateCourses(updateCourse:ICourse):Promise<[number,ICourse[]]> {
        return await models.Course.update({
            name: updateCourse.name
        }, {
            where: {
                id: updateCourse.id
            }
        });
    }

    public static async deleteCourses(deleteCourse:ICourse):Promise<number> {
        return await models.Course.destroy({
            where: {
                id: deleteCourse.id
            }
        });
    }
}

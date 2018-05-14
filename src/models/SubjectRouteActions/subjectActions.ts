import {models} from "../db";
import {ISubject} from "../modelsI";
import {CourseService} from "../CoursesRouteActions/coursesActions";

export class SubjectService {

    public static async getAllSubjects(): Promise<ISubject[] | null> {
        return await  models.Subject.findAll({
            attributes: ['id', 'name']
        });
    }

    public static async getSubjectById(id: number): Promise<ISubject | null> {
        return await models.Subject.findById(id, {
            attributes: ['id', 'name']
        })
    }

    public static async deleteSubject(id: number): Promise<number | null> {
        return await models.Subject.destroy({
            where: {
                id: id
            }
        })
    }

    public static async updateSubject(id: number, name: string): Promise<any | null> {
        return await models.Subject.update({name: name}, {
            where: {
                id: id
            }
        })
    }

    public static addNewSubject(courseId: number, name: string): Promise<ISubject | null> {
        return new Promise<ISubject | null>((resolve, reject) => {
            models.Subject.create({
                name: name
            }).then((subject: any) => {
                CourseService.getCoursesById(courseId).then((course: any) => {
                    console.log(course);
                    course.addSubject(subject);
                    //subject.addCourse(course);
                    resolve(subject)
                })
            })
        })
    }
}
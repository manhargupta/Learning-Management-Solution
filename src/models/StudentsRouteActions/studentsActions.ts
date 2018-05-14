import {models} from "../db";
import {IBatch, IStudent} from "../modelsI";

let Student = models.Student;



export class StudentService {
    public static async addStudent(newStudent: IStudent, batch: any): Promise<IBatch | IStudent | null> {
        return new Promise<IStudent | null>((resolve, reject) => {
            Student.create({name: newStudent.name}).then((student:any) => {
                student.addBatch(batch)
                resolve(student);
            })
        })
    }


    public static async getStudents(): Promise<IStudent[] | null> {
        return await models.Student.findAll({
            include: [{
                model: models.Batch,
                attributes: ['id', 'name']
            }]
        })
    }

    public static async getStudentById(id: number): Promise<IStudent | null> {
        return await models.Student.findById(id);
    }

    public static async deleteUserById(id: number): Promise<number | null> {

        return await  models.Student.destroy({
            where: {
                id: id
            }
        });
    }

    public static async updateStudent(updateStudent:IStudent): Promise<any | null> {
        return await Student.update({
            name: updateStudent.name
        }, {
            where: {
                id: updateStudent.id
            }
        });
    }

    public static async getStudentBatches(id: number): Promise<IStudent[] | null> {
        return await Student.findAll({
            where: {
                id: id
            },
            attributes: [],
            include: [{
                model: models.Batch,
                attributes: ['id', 'name'],
                through: {attributes: []}
            }]
        })
    }

    public static async addStudentToBatch(stu: any, batch: any): Promise<IBatch | IStudent | null> {
        return await batch.addStudent(stu);
    }
}
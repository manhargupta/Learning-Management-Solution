import { IBatch, IStudent } from "../modelsI";
export declare class StudentService {
    static addStudent(newStudent: IStudent, batch: any): Promise<IBatch | IStudent | null>;
    static getStudents(): Promise<IStudent[] | null>;
    static getStudentById(id: number): Promise<IStudent | null>;
    static deleteUserById(id: number): Promise<number | null>;
    static updateStudent(updateStudent: IStudent): Promise<any | null>;
    static getStudentBatches(id: number): Promise<IStudent[] | null>;
    static addStudentToBatch(stu: any, batch: any): Promise<IBatch | IStudent | null>;
}

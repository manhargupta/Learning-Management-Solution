import { ITeacher } from "../modelsI";
export declare class TeachersService {
    static getTeachers(): Promise<ITeacher[] | null>;
    static getTeacherById(id: number): Promise<ITeacher | null>;
    static deleteTeacher(id: number): Promise<number>;
    static updateeacher(id: number, name: string): Promise<[number, ITeacher[]]>;
    static addTeacher(newTeacher: ITeacher, subjectId: number): Promise<ITeacher | null>;
}

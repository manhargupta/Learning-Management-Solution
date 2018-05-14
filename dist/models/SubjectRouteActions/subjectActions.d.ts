import { ISubject } from "../modelsI";
export declare class SubjectService {
    static getAllSubjects(): Promise<ISubject[] | null>;
    static getSubjectById(id: number): Promise<ISubject | null>;
    static deleteSubject(id: number): Promise<number | null>;
    static updateSubject(id: number, name: string): Promise<any | null>;
    static addNewSubject(courseId: number, name: string): Promise<ISubject | null>;
}

import { ISubject } from "../modelsI";
export declare class SubjectService {
    static getSubjects(id: number): Promise<ISubject[] | null>;
    static getSubjectById(id: number): Promise<ISubject | null>;
    static addSubject(courseId: number, newSubject: ISubject): Promise<ISubject | null>;
}

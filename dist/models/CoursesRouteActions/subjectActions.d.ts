import { ICourse, ISubject } from "../modelsI";
export declare class SubjectService {
    static getSubjects(id: number): Promise<ICourse[] | null>;
    static getSubjectById(id: number): Promise<ISubject | null>;
    static getCourseSubjectById(cid: number, sid: number): Promise<ICourse | null>;
    static addSubject(courseId: number, newSubject: ISubject): Promise<ISubject | null>;
}

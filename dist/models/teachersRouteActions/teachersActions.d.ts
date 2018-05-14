import { ISubject, ITeacher } from "../modelsI";
export declare function getTeachers(): Promise<ISubject[] | null>;
export declare function getTeacherById(id: number): Promise<ITeacher | null>;
export declare function addTeacher(newTeacher: ITeacher, subjectId: number): Promise<ITeacher | null>;

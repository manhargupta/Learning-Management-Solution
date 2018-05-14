import { ICourse } from "../modelsI";
export declare class CourseService {
    static getCourses(): Promise<ICourse[] | null>;
    static getCoursesById(id: number): Promise<ICourse | null>;
    static addCourses(newCourse: ICourse): Promise<ICourse | null>;
    static updateCourses(updateCourse: ICourse): Promise<[number, ICourse[]]>;
    static deleteCourses(deleteCourse: ICourse): Promise<number>;
}

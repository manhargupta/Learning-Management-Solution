import { ICourse } from "../modelsI";
export declare class CourseService {
    static getCourses(): Promise<ICourse[] | null>;
    static getCoursesById(id: number): Promise<ICourse | null>;
    static addCourses(newCourse: ICourse): Promise<ICourse | null>;
}

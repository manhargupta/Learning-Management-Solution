import { IBatch, Ilecture } from "../modelsI";
export declare class LectureService {
    static getLectures(id: number, bid: number): Promise<IBatch | null>;
    static getLectureById(id: number, bid: number, lectureId: number): Promise<IBatch | null>;
    static addLecture(courseId: number, batchId: number, subjectId: number, teacherId: number, newlecture: Ilecture): Promise<Ilecture | null>;
    static updateLecture(updateLecture: Ilecture): Promise<[number, Ilecture[]]>;
    static deleteLecture(deleteLecture: Ilecture): Promise<number>;
}

import { IBatch } from "../modelsI";
export declare class BatchesService {
    static getBatches(id: number): Promise<IBatch[] | null>;
    static getBatchById(id: number, bid: number): Promise<IBatch | null>;
    static getBatchTeachers(id: number, bid: number): Promise<IBatch | null>;
    static addBatch(batchId: number, newBatch: IBatch): Promise<IBatch | null>;
    static getBatchStudents(cid: number, bid: number): Promise<IBatch[] | null>;
    static updateBatch(updateBatch: IBatch): Promise<[number, IBatch[]]>;
    static deleteBatch(deleteBatch: IBatch): Promise<number>;
}

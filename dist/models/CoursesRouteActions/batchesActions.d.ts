import { IBatch } from "../modelsI";
export declare class BatchesService {
    static getBatches(id: number): Promise<IBatch[] | null>;
    static getBatchById(id: number, bid: number): Promise<IBatch | null>;
    static getBatchTeachers(id: number, bid: number): Promise<IBatch | null>;
    static addBatch(batchId: number, newBatch: IBatch): Promise<IBatch | null>;
}

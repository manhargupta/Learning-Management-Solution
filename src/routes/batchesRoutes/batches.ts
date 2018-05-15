import express, {Request, Response} from 'express';


import {IBatch} from "../../models/modelsI";
import {BService} from "../../models/BatchesRouteActions/bActions";


let route: express.Router = express.Router();


/////////////////////////
///students/
////////////////////////
route.get('/', (req: Request, res: Response) => {
    BService.getAllBatches().then((batches: IBatch[] | null) => {
        res.status(200).json(batches);
    })
})

export default route
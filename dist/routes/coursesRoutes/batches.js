"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author : Manhar Gupta
 */
var express_1 = __importDefault(require("express"));
var batchesActions_1 = require("../../models/CoursesRouteActions/batchesActions");
var route = express_1.default.Router({ mergeParams: true });
var lectures_1 = __importDefault(require("./lectures"));
var teachers_1 = __importDefault(require("./teachers"));
var students_1 = __importDefault(require("./students"));
var functions_1 = __importDefault(require("../../utilities/functions"));
var routes_ = {
    lecture: lectures_1.default,
    teacher: teachers_1.default,
    student: students_1.default
};
/*  get Request
    path :- /courses/1/batches
 */
route.get('/', function (req, res) {
    batchesActions_1.BatchesService.getBatches(req.params.id).then(function (batch) {
        res.status(200).send(batch);
    });
});
/*  post Request
    path :- /courses/1/batches
 */
route.post('/', function (req, res) {
    var newBatch = {
        id: 0,
        name: req.body.name
    };
    batchesActions_1.BatchesService.addBatch(req.params.id, newBatch).then(function (batch) {
        res.status(200).send(batch);
    });
});
/*  get Request
    path :- /courses/1/batches/1
 */
route.get('/:bid', function (req, res) {
    batchesActions_1.BatchesService.getBatchById(req.params.id, req.params.bid).then(function (batch) {
        res.status(200).send(batch);
    });
});
/*  update Request
    path :- /courses/1/batches/1
 */
route.put('/:bid', function (req, res) {
    var updateBatch = {
        id: req.params.bid,
        name: req.body.name
    };
    batchesActions_1.BatchesService.updateBatch(updateBatch).then(function (batch) {
        if (batch[0] == 0)
            throw Error("Update failed No Batch found for id " + updateBatch.id);
        res.status(200).json(batch);
    }).catch(function (err) {
        res.status(400).json(functions_1.default(err.toString()));
    });
});
/*  delete Request
    path :- /courses/1/batches/1
 */
route.delete('/:id', function (req, res) {
    var deleteBatch = {
        id: req.params.id,
        name: ''
    };
    batchesActions_1.BatchesService.deleteBatch(deleteBatch).then(function (batch) {
        if (batch == 0)
            throw Error("delete failed No Courses found for id " + deleteBatch.id);
        res.status(200).json(batch);
    }).catch(function (err) {
        res.status(400).json(functions_1.default(err.toString()));
    });
});
route.use('/:bid/lectures', routes_.lecture);
route.use('/:bid/teachers', routes_.teacher);
route.use('/:bid/students', routes_.student);
exports.default = route;
//# sourceMappingURL=batches.js.map
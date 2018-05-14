"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author : Manhar Gupta
 */
var express_1 = __importDefault(require("express"));
var lectureActions_1 = require("../../models/CoursesRouteActions/lectureActions");
var functions_1 = __importDefault(require("../../utilities/functions"));
var route = express_1.default.Router({ mergeParams: true });
route.get('/', function (req, res) {
    lectureActions_1.LectureService.getLectures(req.params.id, req.params.bid).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:lid', function (req, res) {
    lectureActions_1.LectureService.getLectureById(req.params.id, req.params.bid, req.params.lid).then(function (batch) {
        res.status(200).send(batch);
    });
});
/*  update Request
    path :- /courses/1/batches/1
 */
route.put('/:lid', function (req, res) {
    var updateLecture = {
        id: req.params.lid,
        name: req.body.name
    };
    lectureActions_1.LectureService.updateLecture(updateLecture).then(function (batch) {
        if (batch[0] == 0)
            throw Error("Update failed No Lecture found for id " + updateLecture.id);
        res.status(200).json(batch);
    }).catch(function (err) {
        res.status(400).json(functions_1.default(err.toString()));
    });
});
/*  delete Request
    path :- /courses/1/batches/1
 */
route.delete('/:lid', function (req, res) {
    var updateLecture = {
        id: req.params.lid,
        name: ''
    };
    lectureActions_1.LectureService.deleteLecture(updateLecture).then(function (batch) {
        if (batch == 0)
            throw Error("delete failed No Courses found for id " + updateLecture.id);
        res.status(200).json(batch);
    }).catch(function (err) {
        res.status(400).json(functions_1.default(err.toString()));
    });
});
route.post('/:sid/:tid', function (req, res) {
    var newLecture = {
        id: 0,
        name: req.body.name,
    };
    lectureActions_1.LectureService.addLecture(req.params.id, req.params.bid, req.params.sid, req.params.tid, newLecture).then(function (lecture) {
        res.status(200).send(lecture);
    });
});
exports.default = route;
//# sourceMappingURL=lectures.js.map
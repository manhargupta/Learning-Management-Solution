"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author : Manhar Gupta
 */
var express_1 = __importDefault(require("express"));
var coursesAction_1 = require("../models/coursesAction");
var route = express_1.default.Router({ mergeParams: true });
route.get('/', function (req, res) {
    coursesAction_1.getLectures(req.params.id, req.params.bid).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:lid', function (req, res) {
    coursesAction_1.getLectureById(req.params.id, req.params.bid, req.params.lid).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.post('/:sid/:tid', function (req, res) {
    var newLecture = {
        id: 0,
        name: req.body.name,
    };
    coursesAction_1.addLecture(req.params.id, req.params.bid, req.params.sid, req.params.tid, newLecture).then(function (lecture) {
        res.status(200).send(lecture);
    });
});
exports.default = route;
//# sourceMappingURL=lectures.js.map
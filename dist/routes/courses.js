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
var route = express_1.default.Router();
route.get('/', function (req, res) {
    coursesAction_1.getCourses().then(function (courses) {
        res.status(200).send(courses);
    });
});
route.post('/', function (req, res) {
    var newCourse = {
        id: 0,
        name: req.body.name
    };
    coursesAction_1.addCourses(newCourse).then(function (course) {
        res.status(200).send(course);
    });
});
route.get('/:id', function (req, res) {
    coursesAction_1.getCoursesById(req.params.id).then(function (courses) {
        res.status(200).send(courses);
    });
});
route.get('/:id/batches', function (req, res) {
    coursesAction_1.getBatches(req.params.id).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.post('/:id/batches', function (req, res) {
    var newBatch = {
        id: 0,
        name: req.body.name
    };
    coursesAction_1.addBatch(req.params.id, newBatch).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:id/batches/:bid', function (req, res) {
    coursesAction_1.getBatcheById(req.params.id, req.params.bid).then(function (batch) {
        res.status(200).send(batch);
    });
});
exports.default = route;
//# sourceMappingURL=courses.js.map
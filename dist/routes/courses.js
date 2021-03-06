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
var batches_1 = __importDefault(require("./batches"));
var subjects_1 = __importDefault(require("./subjects"));
var routes_ = {
    batch: batches_1.default,
    subjects: subjects_1.default
};
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
route.use('/:id/batches', routes_.batch);
route.use('/:id/subjects', routes_.subjects);
exports.default = route;
//# sourceMappingURL=courses.js.map
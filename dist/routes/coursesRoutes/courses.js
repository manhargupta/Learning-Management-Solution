"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author : Manhar Gupta
 */
var express_1 = __importDefault(require("express"));
var coursesActions_1 = require("../../models/CoursesRouteActions/coursesActions");
var route = express_1.default.Router({ mergeParams: true });
var batches_1 = __importDefault(require("./batches"));
var subjects_1 = __importDefault(require("./subjects"));
var routes_ = {
    batch: batches_1.default,
    subjects: subjects_1.default
};
route.get('/', function (req, res) {
    coursesActions_1.CourseService.getCourses().then(function (courses) {
        res.status(200).send(courses);
    });
});
route.post('/', function (req, res) {
    var newCourse = {
        id: 0,
        name: req.body.name
    };
    coursesActions_1.CourseService.addCourses(newCourse).then(function (course) {
        res.status(200).send(course);
    });
});
route.get('/:id', function (req, res) {
    coursesActions_1.CourseService.getCoursesById(req.params.id).then(function (courses) {
        res.status(200).send(courses);
    });
});
route.use('/:id/batches', routes_.batch);
route.use('/:id/subjects', routes_.subjects);
exports.default = route;
//# sourceMappingURL=courses.js.map
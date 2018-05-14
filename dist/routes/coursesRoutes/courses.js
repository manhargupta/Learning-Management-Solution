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
var functions_1 = __importDefault(require("../../utilities/functions"));
var routes_ = {
    batch: batches_1.default,
    subjects: subjects_1.default
};
/*  Get Request
    path :- /courses/
 */
route.get('/', function (req, res) {
    coursesActions_1.CourseService.getCourses().then(function (courses) {
        res.status(200).send(courses);
    });
});
/*  Post Request
    path :- /courses/
 */
route.post('/', function (req, res) {
    var newCourse = {
        id: 0,
        name: req.body.name
    };
    coursesActions_1.CourseService.addCourses(newCourse).then(function (course) {
        res.status(200).send(course);
    });
});
/*  Get Request
    path :- /courses/1
 */
route.get('/:id', function (req, res) {
    coursesActions_1.CourseService.getCoursesById(req.params.id).then(function (courses) {
        res.status(200).send(courses);
    });
});
/*  update Request
    path :- /courses/
 */
route.put('/:id', function (req, res) {
    var updateCourse = {
        id: req.params.id,
        name: req.body.name
    };
    coursesActions_1.CourseService.updateCourses(updateCourse).then(function (course) {
        if (course[0] == 0)
            throw Error("Update failed No Courses found for id " + updateCourse.id);
        res.status(200).json(course);
    }).catch(function (err) {
        res.status(400).json(functions_1.default(err.toString()));
    });
});
/*  delete Request
    path :- /courses/
 */
route.delete('/:id', function (req, res) {
    var deleteCourse = {
        id: req.params.id,
        name: ''
    };
    coursesActions_1.CourseService.deleteCourses(deleteCourse).then(function (course) {
        if (course == 0)
            throw Error("delete failed No Courses found for id " + deleteCourse.id);
        res.status(200).json(course);
    }).catch(function (err) {
        res.status(400).json(functions_1.default(err.toString()));
    });
});
route.use('/:id/batches', routes_.batch);
route.use('/:id/subjects', routes_.subjects);
exports.default = route;
//# sourceMappingURL=courses.js.map
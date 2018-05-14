"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author : Manhar Gupta
 */
var express_1 = __importDefault(require("express"));
var subjectActions_1 = require("../../models/CoursesRouteActions/subjectActions");
var route = express_1.default.Router({ mergeParams: true });
route.get('/', function (req, res) {
    subjectActions_1.SubjectService.getSubjects(req.params.id).then(function (subject) {
        res.status(200).send(subject);
    });
});
route.get('/:sid', function (req, res) {
    subjectActions_1.SubjectService.getCourseSubjectById(req.params.id, req.params.sid).then(function (subject) {
        res.status(200).send(subject);
    });
});
route.post('/', function (req, res) {
    var newSubject = {
        id: 0,
        name: req.body.name
    };
    subjectActions_1.SubjectService.addSubject(req.params.id, newSubject).then(function (subject) {
        res.status(200).send(subject);
    });
});
exports.default = route;
//# sourceMappingURL=subjects.js.map
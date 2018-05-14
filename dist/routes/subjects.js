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
    coursesAction_1.getSubjects(req.params.id).then(function (subject) {
        res.status(200).send(subject);
    });
});
route.get('/:sid', function (req, res) {
    coursesAction_1.getSubjectById(req.params.sid).then(function (subject) {
        res.status(200).send(subject);
    });
});
route.post('/', function (req, res) {
    var newSubject = {
        id: 0,
        name: req.body.name
    };
    coursesAction_1.addSubject(req.params.id, newSubject).then(function (subject) {
        res.status(200).send(subject);
    });
});
exports.default = route;
//# sourceMappingURL=subjects.js.map
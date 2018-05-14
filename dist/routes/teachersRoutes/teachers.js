"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var teachersActions_1 = require("../../models/teachersRouteActions/teachersActions");
var route = express_1.default.Router({ mergeParams: true });
route.get('/', function (req, res) {
    teachersActions_1.getTeachers().then(function (teachers) {
        res.status(200).send(teachers);
    });
});
route.post('/:sid', function (req, res) {
    var newTeacher = {
        id: 0,
        name: req.body.name
    };
    teachersActions_1.addTeacher(newTeacher, req.params.sid).then(function (teacher) {
        res.status(200).send(teacher);
    });
});
exports.default = route;
//# sourceMappingURL=teachers.js.map
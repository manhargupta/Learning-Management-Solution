"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var teachersActions_1 = require("../../models/teachersRouteActions/teachersActions");
var functions_1 = __importDefault(require("../../utilities/functions"));
var route = express_1.default.Router({ mergeParams: true });
route.get('/', function (req, res) {
    teachersActions_1.TeachersService.getTeachers().then(function (teachers) {
        res.status(200).send(teachers);
    });
});
route.get('/:id', function (req, res) {
    teachersActions_1.TeachersService.getTeacherById(req.params.id).then(function (teacher) {
        res.status(200).send(teacher);
    });
});
route.delete('/:id', function (req, res) {
    var id = req.params.id;
    try {
        teachersActions_1.TeachersService.deleteTeacher(id).then(function (result) {
            if (result === 0)
                throw Error('No Teacher found for id ' + id);
            res.status(200).json({
                success: true,
                id: result
            });
        }).catch(function (err) {
            res.status(400).json(functions_1.default(err.toString()));
        });
    }
    catch (err) {
        res.status(400).json(functions_1.default(err.toString()));
    }
});
route.put('/:id', function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    try {
        teachersActions_1.TeachersService.updateeacher(id, name).then(function (result) {
            if (result[0] == 0)
                throw Error('No Teacher found for id ' + id);
            res.status(200).json({
                success: true,
                id: result
            });
        }).catch(function (err) {
            res.status(400).json(functions_1.default(err.toString()));
        });
    }
    catch (err) {
        res.status(400).json(functions_1.default(err.toString()));
    }
});
route.post('/:sid', function (req, res) {
    var newTeacher = {
        id: 0,
        name: req.body.name
    };
    teachersActions_1.TeachersService.addTeacher(newTeacher, req.params.sid).then(function (teacher) {
        res.status(200).send(teacher);
    });
});
exports.default = route;
//# sourceMappingURL=teachers.js.map
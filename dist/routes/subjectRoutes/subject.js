"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var subjectActions_1 = require("../../models/SubjectRouteActions/subjectActions");
var functions_1 = __importDefault(require("../../utilities/functions"));
var route = express_1.default.Router();
route.get('/', function (req, res) {
    subjectActions_1.SubjectService.getAllSubjects().then(function (subjects) {
        res.status(200).json(subjects);
    });
});
route.post('/courses/:cid', function (req, res) {
    var cid = req.params.cid;
    var name = req.body.name;
    subjectActions_1.SubjectService.addNewSubject(cid, name).then(function (subject) {
        res.status(200).json(subject);
    });
});
route.get('/:id', function (req, res) {
    var id = req.params.id;
    subjectActions_1.SubjectService.getSubjectById(id).then(function (subjects) {
        res.status(200).json(subjects);
    });
});
route.delete('/:id', function (req, res) {
    var id = req.params.id;
    try {
        subjectActions_1.SubjectService.deleteSubject(id).then(function (result) {
            if (result === 0)
                throw Error('No Subject found for id ' + id);
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
        subjectActions_1.SubjectService.updateSubject(id, name).then(function (result) {
            if (result[0] == 0)
                throw Error('No Subject found for id ' + id);
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
route.get('/:id/teachers', function (req, res) {
    var id = req.params.id;
    subjectActions_1.SubjectService.getSubjectTeachers(id).then(function (teachers) {
        res.status(200).json(teachers);
    });
});
exports.default = route;
//# sourceMappingURL=subject.js.map
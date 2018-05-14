"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var batchesActions_1 = require("../../models/CoursesRouteActions/batchesActions");
var studentsActions_1 = require("../../models/StudentsRouteActions/studentsActions");
var functions_1 = __importDefault(require("../../utilities/functions"));
var route = express_1.default.Router();
/////////////////////////
///students/
////////////////////////
route.get('/', function (req, res) {
    studentsActions_1.StudentService.getStudents().then(function (students) {
        res.status(200).json(students);
    });
});
route.post('/:cid/:bid', function (req, res) {
    var newStudent = {
        id: 0,
        name: req.body.name
    };
    batchesActions_1.BatchesService.getBatchById(req.params.cid, req.params.bid).then(function (batch) {
        studentsActions_1.StudentService.addStudent(newStudent, batch).then(function (student) {
            res.status(200).json(student);
        });
    });
});
/////////////////////////
///students/:id
////////////////////////
route.get('/:id', function (req, res) {
    var id = req.params.id;
    studentsActions_1.StudentService.getStudentById(id).then(function (student) {
        res.status(200).json(student);
    });
});
route.delete('/:id', function (req, res) {
    var id = req.params.id;
    try {
        studentsActions_1.StudentService.deleteUserById(id).then(function (result) {
            if (result === 0)
                throw Error('No Student found for id ' + id);
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
    var updateStudent = {
        id: req.params.id,
        name: req.body.name
    };
    studentsActions_1.StudentService.updateStudent(updateStudent).then(function (result) {
        if (result == 0)
            throw Error("Update failed No Student found for id" + updateStudent.id);
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(400).json(functions_1.default(err.toString()));
    });
});
/////////////////////////
//students/:id/batches
////////////////////////
route.get("/:id/batches", function (req, res) {
    var id = req.params.id;
    studentsActions_1.StudentService.getStudentBatches(id).then(function (student) {
        res.status(200).json(student);
    });
});
route.post("/:id/courses/:cid/batches/:bid", function (req, res) {
    var id = req.params.id;
    var bid = req.params.bid;
    var cid = req.params.cid;
    batchesActions_1.BatchesService.getBatchById(cid, bid).then(function (batch) {
        studentsActions_1.StudentService.getStudentById(id).then(function (student) {
            studentsActions_1.StudentService.addStudentToBatch(student, batch).then(function (result) {
                console.log(result);
                res.json(result);
            });
        });
    });
});
exports.default = route;
//# sourceMappingURL=students.js.map
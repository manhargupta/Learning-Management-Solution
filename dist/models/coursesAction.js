"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author : Manhar Gupta
 */
var db_1 = require("./db");
function getCourses() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Course.findAll({
                        include: [{
                                model: db_1.models.Batch,
                                attributes: ['id', 'name'],
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getCourses = getCourses;
function getSubjects(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Course.findAll({
                        where: {
                            id: id
                        },
                        include: [{
                                model: db_1.models.Subject,
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSubjects = getSubjects;
function getTeachers() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Teacher.findAll({
                        include: [{
                                model: db_1.models.Subject
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getTeachers = getTeachers;
function getTeacherById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Teacher.findById(id)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getTeacherById = getTeacherById;
function getSubjectById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Subject.findById(id)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSubjectById = getSubjectById;
function getBatches(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Batch.findAll({
                        include: [{
                                model: db_1.models.Course,
                                where: {
                                    id: id
                                },
                                attributes: ['id', 'name'],
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getBatches = getBatches;
function getBatchById(id, bid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Batch.findOne({
                        where: {
                            id: bid
                        },
                        include: [{
                                model: db_1.models.Course,
                                where: {
                                    id: id
                                },
                                attributes: ['id', 'name'],
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getBatchById = getBatchById;
function getCoursesById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Course.findById(id)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getCoursesById = getCoursesById;
function getLectures(id, bid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Batch.findOne({
                        where: {
                            id: bid
                        },
                        attributes: [],
                        include: [{
                                model: db_1.models.Course,
                                where: {
                                    id: id
                                },
                                attributes: [],
                            }, {
                                attributes: ['id', 'name'],
                                model: db_1.models.Lecture,
                                include: [{
                                        model: db_1.models.Subject
                                    }, {
                                        model: db_1.models.Teacher
                                    }]
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getLectures = getLectures;
function getLectureById(id, bid, lectureId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Batch.findOne({
                        where: {
                            id: bid
                        },
                        attributes: [],
                        include: [{
                                model: db_1.models.Course,
                                where: {
                                    id: id
                                },
                                attributes: [],
                            }, {
                                attributes: ['id', 'name'],
                                model: db_1.models.Lecture,
                                where: {
                                    id: lectureId
                                },
                                include: [{
                                        model: db_1.models.Subject
                                    }, {
                                        model: db_1.models.Teacher
                                    }]
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getLectureById = getLectureById;
function getBatchTeachers(id, bid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Batch.findOne({
                        where: {
                            id: bid
                        },
                        attributes: [],
                        include: [{
                                model: db_1.models.Course,
                                where: {
                                    id: id
                                },
                                attributes: [],
                            }, {
                                attributes: ['teacherId'],
                                model: db_1.models.Lecture,
                                include: [{
                                        attributes: ['id', 'name'],
                                        model: db_1.models.Teacher
                                    }]
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getBatchTeachers = getBatchTeachers;
function addCourses(newCourse) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.models.Course.create({
                        name: newCourse.name
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.addCourses = addCourses;
function addTeacher(newTeacher, subjectId) {
    return new Promise(function (resolve, reject) {
        db_1.models.Teacher.create({
            name: newTeacher.name
        }).then(function (teacher) {
            getSubjectById(subjectId).then(function (subject) {
                teacher.addSubject(subject);
                resolve(teacher);
            });
        });
    });
}
exports.addTeacher = addTeacher;
function addBatch(batchId, newBatch) {
    return new Promise(function (resolve, reject) {
        db_1.models.Batch.create({
            name: newBatch.name
        }).then(function (batch) {
            getCoursesById(batchId).then(function (course) {
                course.addBatch(batch);
                resolve(batch);
            });
        });
    });
}
exports.addBatch = addBatch;
function addSubject(courseId, newSubject) {
    return new Promise(function (resolve, reject) {
        db_1.models.Subject.create({
            name: newSubject.name
        }).then(function (subject) {
            getCoursesById(courseId).then(function (course) {
                course.addSubject(subject);
                resolve(subject);
            });
        });
    });
}
exports.addSubject = addSubject;
function addLecture(courseId, batchId, subjectId, teacherId, newlecture) {
    return new Promise(function (resolve, reject) {
        db_1.models.Lecture.create({
            name: newlecture.name
        }).then(function (lecture) {
            getBatchById(courseId, batchId).then(function (batch) {
                getSubjectById(subjectId).then(function (subject) {
                    getTeacherById(teacherId).then(function (teacher) {
                        batch.addLecture(lecture);
                        subject.setLecture(lecture);
                        teacher.setLecture(lecture);
                        resolve(lecture);
                    });
                });
            });
        });
    });
}
exports.addLecture = addLecture;
//# sourceMappingURL=coursesAction.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author : Manhar Gupta
 */
var sequelize_1 = __importDefault(require("sequelize"));
var db = new sequelize_1.default('lms', '', '', {
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        idle: 5000
    },
    storage: './lms.sqlite'
});
exports.db = db;
var courseAttr = {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize_1.default.STRING,
};
var Course = db.define('course', courseAttr);
var batchAttr = {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize_1.default.STRING,
};
var Batch = db.define('batch', batchAttr);
var subjectAttr = {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize_1.default.STRING,
};
var Subject = db.define('subject', subjectAttr);
var techerAttr = {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize_1.default.STRING,
};
var Teacher = db.define('teacher', techerAttr);
var lectureAttr = {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize_1.default.STRING,
};
var Lecture = db.define('lecture', lectureAttr);
var studentAttr = {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize_1.default.STRING,
};
var Student = db.define('student', studentAttr);
Batch.belongsTo(Course);
Course.hasMany(Batch);
Course.belongsToMany(Subject, { through: 'course_subject', onDelete: 'cascade' });
Subject.belongsToMany(Course, { through: 'course_subject', onDelete: 'cascade' });
Teacher.belongsToMany(Subject, { through: 'teacher_subject', onDelete: 'cascade' });
Subject.belongsToMany(Teacher, { through: 'teacher_subject', onDelete: 'cascade' });
Lecture.belongsTo(Batch);
Batch.hasMany(Lecture);
Lecture.belongsTo(Subject);
Subject.hasOne(Lecture);
Lecture.belongsTo(Teacher);
Teacher.hasMany(Lecture);
Student.belongsToMany(Batch, { through: 'Student_Batch', onDelete: 'cascade' });
Batch.belongsToMany(Student, { through: 'Student_Batch', onDelete: 'cascade' });
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, db.authenticate()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, db.sync({ force: true })
                            .then(function () {
                            console.log("Database Synchronised");
                        })
                            .catch(function (err) {
                            console.log("Error setting up Database");
                            console.error(err);
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
})();
var models = {
    Course: Course,
    Batch: Batch,
    Subject: Subject,
    Teacher: Teacher,
    Lecture: Lecture,
    Student: Student
};
exports.models = models;
//# sourceMappingURL=db.js.map
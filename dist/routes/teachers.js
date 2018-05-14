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
    coursesAction_1.getBatchTeachers(req.params.id, req.params.bid).then(function (batch) {
        res.status(200).send(batch.lectures);
    });
});
exports.default = route;
//# sourceMappingURL=teachers.js.map
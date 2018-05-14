"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author : Manhar Gupta
 */
var express_1 = __importDefault(require("express"));
var batchesActions_1 = require("../../models/CoursesRouteActions/batchesActions");
var route = express_1.default.Router({ mergeParams: true });
route.get('/', function (req, res) {
    batchesActions_1.BatchesService.getBatchTeachers(req.params.id, req.params.bid).then(function (batch) {
        res.status(200).send(batch.lectures);
    });
});
exports.default = route;
//# sourceMappingURL=students.js.map
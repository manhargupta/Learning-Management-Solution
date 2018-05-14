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
var lectures_1 = __importDefault(require("./lectures"));
var teachers_1 = __importDefault(require("./teachers"));
var routes_ = {
    lecture: lectures_1.default,
    teacher: teachers_1.default
};
route.get('/', function (req, res) {
    coursesAction_1.getBatches(req.params.id).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.post('/', function (req, res) {
    var newBatch = {
        id: 0,
        name: req.body.name
    };
    coursesAction_1.addBatch(req.params.id, newBatch).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:bid', function (req, res) {
    coursesAction_1.getBatchById(req.params.id, req.params.bid).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.use('/:bid/lectures', routes_.lecture);
route.use('/:bid/teachers', routes_.teacher);
exports.default = route;
//# sourceMappingURL=batches.js.map
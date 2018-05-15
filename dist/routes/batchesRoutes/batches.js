"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bActions_1 = require("../../models/BatchesRouteActions/bActions");
var route = express_1.default.Router();
/////////////////////////
///students/
////////////////////////
route.get('/', function (req, res) {
    bActions_1.BService.getAllBatches().then(function (batches) {
        res.status(200).json(batches);
    });
});
exports.default = route;
//# sourceMappingURL=batches.js.map
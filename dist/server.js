"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author : Manhar Gupta
 */
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var courses_1 = __importDefault(require("./routes/courses"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/', express_1.default.static(path_1.default.join(__dirname, "../public")));
var route = {
    course: courses_1.default
};
app.use('/courses', route.course);
app.listen(7777, function () {
    console.log('server running on port 7777');
});
//# sourceMappingURL=server.js.map
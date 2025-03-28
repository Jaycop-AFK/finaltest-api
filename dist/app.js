"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
require("./config/database");
const student_route_1 = __importDefault(require("./routes/student.route"));
const course_route_1 = __importDefault(require("./routes/course.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("api is ready!!!");
});
app.use(express_1.default.json());
app.use("/api/students", student_route_1.default);
app.use("/api/courses", course_route_1.default);
// app.post('/ownerCars/checkAndRecordEntry', (req, res) => {
//   console.log(req.body); 
//   res.send('Data received successfully!');
// });
app.listen(process.env.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
}));

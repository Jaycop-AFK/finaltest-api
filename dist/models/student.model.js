"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const studentSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    studentId: { type: String, required: true },
    dob: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    prefix: { type: String, required: true },
    typeOfSubject: { type: String, required: true },
    FieldOfStudy: { type: String, required: true },
    FieldOfWork: { type: String, required: true },
    classRoom: { type: String, required: true },
    year: { type: String, required: true },
});
const Student = mongoose_1.default.model("Student", studentSchema);
exports.default = Student;

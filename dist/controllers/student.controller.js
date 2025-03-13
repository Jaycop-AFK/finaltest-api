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
const student_model_1 = __importDefault(require("../models/student.model"));
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, studentId, dob, address, phoneNumber, prefix, typeOfSubject, FieldOfStudy, FieldOfWork, classRoom, year } = req.body;
        if (!name ||
            !studentId ||
            !dob ||
            !address ||
            !phoneNumber ||
            !prefix ||
            !typeOfSubject ||
            !FieldOfStudy ||
            !FieldOfWork ||
            !classRoom ||
            !year) {
            return res.status(400).send('All fields are required');
        }
        const newStudent = new student_model_1.default({
            name,
            studentId,
            dob,
            address,
            phoneNumber,
            prefix,
            typeOfSubject,
            FieldOfStudy,
            FieldOfWork,
            classRoom,
            year
        });
        yield newStudent.save();
        return res.status(201).json({ message: "Student created successfully", newStudent });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const student = yield student_model_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res
            .status(200)
            .json({ message: "Student updated successfully", student });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const fetchAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_model_1.default.find();
        return res.status(200).json({ message: "Students fetched successfully", students });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const fetchOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const student = yield student_model_1.default.findById(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res
            .status(200)
            .json({ message: "Student fetched successfully", student });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const student = yield student_model_1.default.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res
            .status(200)
            .json({ message: "Student deleted successfully", student });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = { createStudent, updateStudent, fetchAll, fetchOne, deleteStudent };

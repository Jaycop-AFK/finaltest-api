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
const course_model_1 = __importDefault(require("../models/course.model"));
const CourseCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nameOfCourse, codeOfCourse, credit, hours } = req.body;
        if (!nameOfCourse || !codeOfCourse || !credit || !hours) {
            return res.status(400).send('All fields are required');
        }
        const newCourse = new course_model_1.default({
            nameOfCourse,
            codeOfCourse,
            credit,
            hours
        });
        yield newCourse.save();
        return res.status(201).json({ message: "Course created successfully", newCourse });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const CourseUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const course = yield course_model_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res
            .status(200)
            .json({ message: "Course updated successfully", course });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const CourseDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const course = yield course_model_1.default.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res
            .status(200)
            .json({ message: "Course deleted successfully", course });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const CourseFetchAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield course_model_1.default.find();
        return res.status(200).json({ message: "Courses fetched successfully", courses });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const CourseFetchOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const course = yield course_model_1.default.findById(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res
            .status(200)
            .json({ message: "Course fetched successfully", course });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = { CourseCreate, CourseUpdate, CourseDelete, CourseFetchAll, CourseFetchOne };

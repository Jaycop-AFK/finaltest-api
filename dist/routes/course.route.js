"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_controller_1 = __importDefault(require("../controllers/course.controller"));
const router = (0, express_1.Router)();
router.post("/", course_controller_1.default.CourseCreate);
router.get("/", course_controller_1.default.CourseFetchAll);
router.get("/:id", course_controller_1.default.CourseFetchOne);
router.put("/:id", course_controller_1.default.CourseUpdate);
router.delete("/:id", course_controller_1.default.CourseDelete);
exports.default = router;

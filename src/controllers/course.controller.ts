import Course from "../models/course.model";
import { Request, Response } from "express";
import { CourseInterface } from "../interfaces/course.interface";
import { RequestWithCourse, ResponseWithCourse } from "../interfaces/course.interface";

const CourseCreate = async (req: RequestWithCourse, res: ResponseWithCourse) => {
    try {
        const { nameOfCourse, codeOfCourse, credit, hours } = req.body;
        if (!nameOfCourse || !codeOfCourse || !credit || !hours) {
            return res.status(400).send('All fields are required');
        }
        const newCourse = new Course({
            nameOfCourse,
            codeOfCourse,
            credit,
            hours
        });
        await newCourse.save();
        return res.status(201).json({ message: "Course created successfully", newCourse });
    } catch (error) {
        res.status(500).send(error);
    }
};

const CourseUpdate = async (req: RequestWithCourse, res: ResponseWithCourse) => {
    try {
        const { id } = req.params;
        const course = await Course.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res
            .status(200)
            .json({ message: "Course updated successfully", course });
    } catch (error) {
        res.status(500).send(error);
    }
};

const CourseDelete = async (req: RequestWithCourse, res: ResponseWithCourse) => {
    try {
        const { id } = req.params;
        const course = await Course.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res
            .status(200)
            .json({ message: "Course deleted successfully", course });
    } catch (error) {
        res.status(500).send(error);
    }
};

const CourseFetchAll = async (req: RequestWithCourse, res: ResponseWithCourse) => {
    try {
        const courses = await Course.find();
        return res.status(200).json({ message: "Courses fetched successfully", courses });
    } catch (error) {
        res.status(500).send(error);
    }
};

const CourseFetchOne = async (req: RequestWithCourse, res: ResponseWithCourse) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res
            .status(200)
            .json({ message: "Course fetched successfully", course });
    } catch (error) {
        res.status(500).send(error);
    }
};

export default { CourseCreate, CourseUpdate, CourseDelete, CourseFetchAll, CourseFetchOne };
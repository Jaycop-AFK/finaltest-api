import mongoose from "mongoose";
import { CourseInterface } from "../interfaces/course.interface";

const courseSchema = new mongoose.Schema<CourseInterface>({
    nameOfCourse: { type: String, required: true },
    codeOfCourse: { type: String, required: true },
    credit: { type: Number, required: true },
    hours: { type: Number, required: true },
  });

  const Course = mongoose.model<CourseInterface>("Course", courseSchema);

  export default Course;

  
import mongoose from "mongoose";
import { StudentInterface } from "../interfaces/student.interface";

const studentSchema = new mongoose.Schema<StudentInterface>({
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

const Student = mongoose.model<StudentInterface>("Student", studentSchema);

export default Student;

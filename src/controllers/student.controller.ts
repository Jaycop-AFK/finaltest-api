import { Request, Response } from "express";
import Student from "../models/student.model";
import { RequestWithStudent, ResponseWithStudent, StudentInterface } from "../interfaces/student.interface";

 const createStudent = async (req: RequestWithStudent, res: ResponseWithStudent) => {
   try {
    const {
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
    } : {
        name: string;
        studentId: string;
        dob: string;
        address: string;
        phoneNumber: string;
        prefix: string;
        typeOfSubject: string;
        FieldOfStudy: string;
        FieldOfWork: string;
        classRoom: string;
        year: string;
    } = req.body;

    if (
        !name ||
        !studentId ||
        !dob ||
        !address ||
        !phoneNumber ||
        !prefix ||
        !typeOfSubject ||
        !FieldOfStudy ||
        !FieldOfWork ||
        !classRoom ||
        !year
    ) {
        return res.status(400).send('All fields are required');
    }

    const newStudent = new Student({
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


    await newStudent.save();
    return res.status(201).json({ message: "Student created successfully", newStudent });
   } catch (error) {
    res.status(500).send(error);
   }
};


const updateStudent = async (req: RequestWithStudent, res: ResponseWithStudent) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if (!student) {
          return res.status(404).json({ message: "Student not found" });
        }
        return res
          .status(200)
          .json({ message: "Student updated successfully", student });
    } catch (error) {
        res.status(500).send(error);
    }
};

const fetchAll = async (req: RequestWithStudent, res: ResponseWithStudent) => {
    try {
        const students = await Student.find();
        return res.status(200).json({ message: "Students fetched successfully", students });
    } catch (error) {
        res.status(500).send(error);
    }
};

const fetchOne = async (req: RequestWithStudent, res: ResponseWithStudent) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res
            .status(200)
            .json({ message: "Student fetched successfully", student });
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteStudent = async (req: RequestWithStudent, res: ResponseWithStudent) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res
            .status(200)
            .json({ message: "Student deleted successfully", student });
    } catch (error) {
        res.status(500).send(error);
    }
};

export default { createStudent, updateStudent, fetchAll, fetchOne, deleteStudent };

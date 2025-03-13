import { NextFunction } from "express";
import { Request, Response } from "express";
import { Types } from "mongoose";

export interface StudentInterface {
    _id: Types.ObjectId;
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
    
}


export interface RequestWithStudent extends Request {
    student?: StudentInterface;
}

export interface ResponseWithStudent extends Response {
    student?: StudentInterface;
}

export interface NextFunctionWithStudent extends NextFunction {
    student?: StudentInterface;
}

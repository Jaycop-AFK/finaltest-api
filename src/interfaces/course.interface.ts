import { Types } from 'mongoose';
import { NextFunction, Request, Response } from 'express';

export interface CourseInterface {
    _id: Types.ObjectId;
    nameOfCourse: string;
    codeOfCourse: string;
    credit: number;
    hours: number;
}

export interface RequestWithCourse extends Request {
    course?: CourseInterface;
}

export interface ResponseWithCourse extends Response {
    course?: CourseInterface;
}

export interface NextFunctionWithCourse extends NextFunction {
    course?: CourseInterface;
}
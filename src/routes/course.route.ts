import { Router, Application } from "express";
import Course from "../controllers/course.controller"



const router = Router();


router.post("/", Course.CourseCreate as Application);

router.get("/", Course.CourseFetchAll as Application);

router.get("/:id", Course.CourseFetchOne as Application);

router.put("/:id", Course.CourseUpdate as Application);

router.delete("/:id", Course.CourseDelete as Application);

export default router;

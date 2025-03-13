import { Application, Router } from "express";
import studentController from "../controllers/student.controller";


const router = Router();

router.post("/", studentController.createStudent as Application);

router.get("/", studentController.fetchAll as Application);

router.get("/:id", studentController.fetchOne as Application);

router.put("/:id", studentController.updateStudent as Application);

router.delete("/:id", studentController.deleteStudent as Application);

export default router;


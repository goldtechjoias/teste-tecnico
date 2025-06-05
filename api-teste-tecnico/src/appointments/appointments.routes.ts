import { Router } from "express";
import { AppointmentController } from "./AppointmentController";
import { AppointmentService } from "./AppointmentService";
import { AppointmentRepository } from "./AppointmentRepository";

const router = Router();

const repository = new AppointmentRepository();
const service = new AppointmentService(repository);
const controller = new AppointmentController(service);

router.post("/create", controller.create.bind(controller));
router.get("/all", controller.getAll.bind(controller));

export default router;
import { Router } from "express"
import { AppointmentController } from "./AppointmentController"

const router = Router()
const controller = new AppointmentController()

router.post("/create", controller.create)
router.get("/all", controller.getAll)

export { router as appointmentRoutes }

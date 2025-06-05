import { z } from "zod";
import { Request, Response } from "express";

import { AppointmentService } from "./AppointmentService";

const createAppointmentSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  date: z.coerce.date(),
});

export class AppointmentController {
  constructor(private service: AppointmentService) {}

  async create(req: Request, res: Response) {
    try {
      const { name, email, date } = createAppointmentSchema.parse(req.body);
      const appointment = await this.service.createAppointment(name, email, date);
      return res.status(201).json(appointment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const appointments = await this.service.getAllAppointments();
      return res.json(appointments);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
import { Request, Response } from "express"
import { AppointmentService } from "./AppointmentService"

export class AppointmentController {
  private service = new AppointmentService()

  create = async (req: Request, res: Response) => {
    try {
      const result = await this.service.create(req.body)
      return res.status(201).json(result)
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

  getAll = async (_: Request, res: Response) => {
    const list = await this.service.getAll()
    return res.json(list)
  }
}

import { Appointment } from "./Appointment"
import { z } from "zod"

const schema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  data: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: 'Data inválida',
  })
})

export class AppointmentService {
  private appointments: Appointment[] = []

  async create(data: any) {
    const valid = schema.parse(data)
    const novo = new Appointment(valid.nome, valid.email, new Date(valid.data))
    this.appointments.push(novo)
    return novo
  }

  async getAll() {
    return this.appointments
  }
}

import { AppointmentRepository } from "./AppointmentRepository";

export class AppointmentService {
  constructor(private repository: AppointmentRepository) {}

  async createAppointment(name: string, email: string, date: Date) {
    return this.repository.create(name, email, date);
  }

  async getAllAppointments() {
    return this.repository.findAll();
  }
}
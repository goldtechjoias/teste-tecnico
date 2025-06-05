import { prisma } from "../lib/prisma";

export class AppointmentRepository {
  async create(name: string, email: string, date: Date) {
    return prisma.appointment.create({
      data: { name, email, date },
    });
  }

  async findAll() {
    return prisma.appointment.findMany();
  }
}
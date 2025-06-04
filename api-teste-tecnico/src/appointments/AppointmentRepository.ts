export interface AppointmentRepository {
  create: (data: any /**ENTIDADE */) => Promise<void>;
  getAll: () => Promise<any /**ENTIDADE */[]>;
}

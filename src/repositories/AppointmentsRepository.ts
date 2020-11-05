import Appointment from '../models/Appointment';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appointment)
export default class AppointmentController extends Repository<Appointment>{

  public async findByDate(date: Date): Promise<Appointment | null> {
    // const findAppointmentInSame = this.appointments.find(appointment => isEqual(date, appointment.date),);

    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

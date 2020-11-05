import express from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointmentRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentServices';


const appointmentsRouter = express.Router();



appointmentsRouter.get('/', async (req, res) => {

  const appointmentRepository = getCustomRepository(AppointmentRepository);
  const appointments = await appointmentRepository.find();

  return res.json(appointments);
});


appointmentsRouter.post('/', async (req, res) => {
  try {
    const { provider, date } = req.body;

    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({ date: parseDate, provider });

    return res.json(appointment);
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
});

export default appointmentsRouter;

import express from 'express';
import appointmentsRouter from './appointments.router';


const router = express.Router();

router.use('/appointments', appointmentsRouter);


export default router;

import express from 'express';
import appointmentsRouter from './appointments.router';
import usersRouter from './users.router';


const router = express.Router();

router.use('/users', usersRouter);
router.use('/appointments', appointmentsRouter);


export default router;

import express from 'express';
import appointmentsRouter from './appointments.router';
import usersRouter from './users.router';
import sessionRouter from './session.routes';


const router = express.Router();

router.use('/appointments', appointmentsRouter);
router.use('/users', usersRouter);
router.use('/sessions', sessionRouter);


export default router;

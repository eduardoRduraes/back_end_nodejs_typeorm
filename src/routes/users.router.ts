import express from 'express';

import CreateUserServices from '../services/CreateUserServices';


const appointmentsRouter = express.Router();





appointmentsRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserServices();

    const user = await createUser.execute({ name, email, password });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
});

export default appointmentsRouter;

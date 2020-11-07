import express from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';


const sessionRouter = express.Router();

sessionRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const authenticateUserService = new AuthenticateUserService;

    const { user, token } = await authenticateUserService.execute({ email, password });

    delete user.password;

    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
});

export default sessionRouter;

import express, { response } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';

import CreateUserServices from '../services/CreateUserServices';
import ensureAthenticated from '../middlewares/ensureAuthenticated';
import updateUserAvatarService from '../services/UpdateUserAvatarServices';
import UpdateUserAvatarService from '../services/UpdateUserAvatarServices';


const userRouter = express.Router();
const upload = multer(uploadConfig);

userRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserServices();

    const user = await createUser.execute({ name, email, password });


    delete user.password;

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
});

userRouter.patch('/avatar', ensureAthenticated, upload.single('avatar'), async (req, res) => {
  try {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: req.user.id,
      avatarFilename: req.file.filename,
    });

    return res.json(user);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default userRouter;

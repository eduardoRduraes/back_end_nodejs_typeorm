import 'reflect-metadata';

import express from 'express';
import router from './routes';

import uploadCofing from './config/upload';

import './database';

const app = express();


app.use(express.json());
app.use('/files', express.static(uploadCofing.directory));
app.use(router);

app.listen(3333, () => {
  console.log("server start on port 3333!");
});

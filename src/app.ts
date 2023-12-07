/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/config/middlewares/globalErrorHandler';
import notFound from './app/config/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  // res.send('DS University Management');

  Promise.reject();
};

app.get('/', test);

app.use(globalErrorHandler);

//Not Found

app.use(notFound);

export default app;

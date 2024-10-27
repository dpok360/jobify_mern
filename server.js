import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import DBconnect from './config/database.js';
import cloudinaryConfig from './config/cloudinaryConfig.js';
//router
import userRouter from './routes/userRouter.js';
import authRouter from './routes/authRouter.js';
import jobRouter from './routes/jobRouter.js';
//public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

await cloudinaryConfig();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.json());
app.use(cookieParser());

//ROUTE
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);
app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './public', 'index.html'));
// });

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);
await DBconnect();
const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`server running on PORT ${port}....`);
});

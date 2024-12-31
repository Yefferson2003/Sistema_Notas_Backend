import express from 'express';
import cors from 'cors';
import { corsConfig } from './config/cors';
import router from './routes/index.routes';
import connectDB from './config/db';

connectDB();

export const app = express();

app.use(cors(corsConfig));
app.use(express.json());

app.use('/api', router);

export default app;
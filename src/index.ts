import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app: Express = express();
dotenv.config();
const port = process.env.PORT;

const corsOptions = {
  origin: '*',
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
};

app.use(cors(corsOptions));

app.post('/', (req: Request, res: Response) => {
  console.log('HIT');
  res.setHeader;
  res.setHeader('Set-Cookie', 'myCookie=myValue');
  res.send('Express + TypeScript Server!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

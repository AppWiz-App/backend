import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { CORS_OPTIONS } from '../middleware/cors';
import { routes } from './routes';

const app: Express = express();

// app level middleware (applies to all routes)
app.use(cors(CORS_OPTIONS));

// register routes
app.use('*', routes);

app.listen(process.env.PORT, () => {
  console.log(
    `[server]: Server is running at http://localhost:${process.env.PORT}`
  );
});

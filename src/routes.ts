import express, { Request, Response } from 'express';
import { supabase } from '../supabase/client';

export const routes = express.Router();

routes.post('/', async (req: Request, res: Response) => {
  console.log('HIT');
  console.log(process.env.PORT);
  console.log(process.env.SUPABASE_PROJECT_URL);

  console.log(`auth header ${req.headers.authorization?.slice(7)}`);

  const jwt = req.headers.authorization!.slice(7);
  console.log('JWT HERE');
  console.log(jwt);

  // fetches the user object, and for the rest of the
  const {
    data: { user },
  } = await supabase.auth.getUser(jwt);

  console.log({ user });
  // res.send(403);

  let { data: Club, error } = await supabase.from('Club').select('*');
  console.log('error here', error);
  console.log('Club stuff here');
  console.log(Club);

  res.setHeader;
  res.setHeader('Set-Cookie', 'myCookie=myValue');
  res.send('Express + TypeScript Server!');
});

routes.get('/club', async (req: Request, res: Response) => {
  console.log(req);

  // if (!req.headers.authorization) {
  //   res.send(403);
  //   return;
  // }
  // const jwt = req.headers.authorization!.slice(7);
  const jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmbG9vZGN5ZWttcnNhY2xjbmpqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTAxMDA0OCwiZXhwIjoyMDQ0NTg2MDQ4fQ.YcgK2Kd50BAQqKcYkghlyVLDTFNPvie2zRZakX8BF88';
  console.log('JWT HERE');
  console.log(jwt);

  // fetches the user object, and for the rest of the
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser(jwt);

  // if user null res 403

  // console.log({ user });
  // res.send(403);

  let { data: club, error } = await supabase.from('Club').select('*');
  console.log(error);
  console.log('Club stuff here');
  console.log(club);

  res.send(club);
});

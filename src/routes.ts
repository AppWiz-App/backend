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

  // console.log({ user });
  // res.send(403);

  let { data: Club, error } = await supabase.from('Club').select('*');
  console.log('Club stuff here');
  console.log(Club);

  res.setHeader;
  res.setHeader('Set-Cookie', 'myCookie=myValue');
  res.send('Express + TypeScript Server!');
});

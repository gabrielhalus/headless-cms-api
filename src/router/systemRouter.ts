import { Router, Request, Response } from 'express';

const router = Router();

router.get('/status', (req: Request, res: Response) => {
  res.send({ status: 'OK', environment: process.env.NODE_ENV });
});

export default router;

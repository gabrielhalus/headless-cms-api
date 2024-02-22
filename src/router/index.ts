import { Router } from 'express';
import systemRouter from './systemRouter';

const router = Router();

router.use('/', systemRouter);

export default router;

import { Router } from 'express';
import CompetitotWatchRoutes from './modules/competitor-watch/routes';
const router = Router();

router.use('/competitor-watch', CompetitotWatchRoutes);

export default router;

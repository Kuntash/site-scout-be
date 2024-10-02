import { Router } from 'express';
import CompetitotWatchRoutes from './modules/competitor-watch/routes';
import AuthenticationRoutes from './modules/authentication/routes';

const router = Router();

router.use('/competitor-watch', CompetitotWatchRoutes);
router.use('/authentication', AuthenticationRoutes);
export default router;

import { Router } from 'express';
import CrawlerRoutes from './crawler.routes';

const router = Router();

router.use('/crawler', CrawlerRoutes);

export default router;

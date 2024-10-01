import { Router } from 'express';
import CrawlerController from '../controllers/crawler.controller';

const crawlerController = new CrawlerController();
const router = Router();

router.get('/content', crawlerController.getWebsiteContent);

export default router;

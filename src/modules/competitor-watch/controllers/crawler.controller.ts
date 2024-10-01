import { Request, Response } from 'express';
import CrawlerService from '../services/crawler.service';

class CrawlerController {
  async getWebsiteContent(req: Request, res: Response) {
    const { url } = req?.query;

    if (!url) {
      return res.status(400).json({ message: 'URL is required' });
    }

    const crawlerService = new CrawlerService();
    const page = await crawlerService.crawl(url as string);
    const content = await crawlerService.getPageContent(page);

    return res.status(200).json({ content });
  }
}

export default CrawlerController;

import { Browser, launch, Page } from 'puppeteer';

class CrawlerService {
  private browser: Browser | null = null;

  private async initBrowser() {
    if (!this.browser) {
      this.browser = await launch();
    }
    return this.browser;
  }

  /* a method to go to a website and fetch the page*/
  async crawl(url: string) {
    const browser = await this.initBrowser();

    const page = await browser.newPage();

    await page.goto(url);

    return page;
  }

  async getPageContent(page: Page) {
    return page.content();
  }

  async getPageSnapshot(page: Page) {
    return page.screenshot();
  }
}

export default CrawlerService;

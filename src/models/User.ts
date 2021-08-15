import { VIEW_PORTS } from '../@types/VIEW_PORTS';
import puppeteer from '../services/puppeteer';

export class User {
  public name: string = '';

  public email: string = '';

  public SO: string = '';

  public browser: string = '';

  public idioma: string = '';

  public viewport: keyof typeof VIEW_PORTS = 'WEB';

  constructor(props: User) {
    Object.assign(this, props);
  }

  public async start() {
    const browser = await puppeteer.launch({
      headless: false,
      userDataDir: `./tmp/${this.email}`,
      args: ['--no-sandbox'],
      defaultViewport: VIEW_PORTS[this.viewport],
      
    });
    const page = await browser.newPage();
    page.setUserAgent(`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36`);
    await page.goto('https://antoinevastel.com/bots/datadome');
  }
}

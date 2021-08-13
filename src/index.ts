// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

// puppeteer usage as normal


(async () => {
  const browser = await puppeteer.launch({ headless: false , userDataDir: './tmp/user' });
  const page = await browser.newPage();
  await page.setViewport({width: 1200, height: 720});
  await page.goto('https://www.facebook.com');
  // await page.type('#email', auth.username);
  // await page.type('#pass', auth.password);
  
  // await Promise.all([
  //   page.click('#u_0_k_21'),
  // ]);

  // await browser.close();
})();
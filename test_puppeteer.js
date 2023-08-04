// Minimal puppeteer get page HTML source code example
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://api.myip.com/', {waitUntil: 'domcontentloaded'});
  // Wait for 5 seconds
  console.log(await page.content());
  // Take screenshot
  await browser.close();
})();

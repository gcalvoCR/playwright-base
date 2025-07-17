const { chromium } = require('playwright');

// Playwright APIs are async, return promise 
// they need follow the async/await pattern

(async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 2000});
    const page = await browser.newPage();
    await page.goto('http://google.com');
    await browser.close();
})();
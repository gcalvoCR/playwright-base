const { chromium } = require('playwright');

// Playwright APIs are async, return promise 
// they need follow the async/await pattern

(async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 2000});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/forgot_password');
    const email = await page.locator('#email')
    // const email = await page.waitForSelector('#email')
    // const email = await page.$('#email')
    await email.type('example@gmail.com', {delay: 10})  // Types slower, like a user
    await browser.close();
})();
const { chromium } = require('playwright');

// Playwright APIs are async, return promise 
// they need follow the async/await pattern

(async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 2000});
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    await page.click('//*[@id="t1"]/table/tr[1]/td[1]/button', {delay: 100})
    await page.click('//*[@id="t1"]/table/tr[2]/td[1]/button', {delay: 100})
    await page.click('//*[@id="t1"]/table/tr[3]/td[1]/button', {delay: 100})
    await browser.close();
})();
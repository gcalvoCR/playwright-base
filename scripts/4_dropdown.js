const { chromium } = require('playwright');

// Playwright APIs are async, return promise 
// they need follow the async/await pattern

(async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.waitForSelector('#dropdown');
    // value
    await dropdown.selectOption({value: '1'});
    // label
    await dropdown.selectOption({label: 'Option 2'});
    // index
    await dropdown.selectOption({index: 1});
    // values inside this select
    const options = await dropdown.$$('option');
    for (const item of options) {
        console.log(await item.innerText())
    }
    await browser.close();
})();
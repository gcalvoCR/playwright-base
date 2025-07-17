const { firefox } = require('playwright');

// Playwright APIs are async, return promise 
// they need follow the async/await pattern

(async() => {
    //function code
    const browser = await firefox.launch({headless: false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    // check the second checkbox
    const checks = await page.$$('.w3-row  .s4 input[type="checkbox"]')
    await checks[1].check();
    await checks[0].uncheck()
    // select the second radio button
    const radios = await page.$$('.w3-row  .s4 input[type="radio"]')
    await checks[1].check();
    //close browser
    await browser.close();
})();
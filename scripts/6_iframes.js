const { webkit } = require('playwright');

// Playwright APIs are async, return promise 
// they need follow the async/await pattern

(async() => {
    //function code
    const browser = await webkit.launch({headless: false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/frames');
    // logic to handle iframe
    const frame1 = await page.frame({url: /\/sample/}) //regular expression
    const heading = await frame1.$('h1');
    console.log(await heading.innerText());
    //close browser
    await browser.close();
})();
const { webkit } = require('playwright');

// Playwright APIs are async, return promise 
// they need follow the async/await pattern

(async() => {
    //function code
    const browser = await webkit.launch({headless: false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');
    // logic to alerts
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.click('#confirmButton', {delay: 500});
    
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept('my text is this');
    })
    await page.click('#promtButton', {delay: 500})
    //close browser
    await browser.close();
})();
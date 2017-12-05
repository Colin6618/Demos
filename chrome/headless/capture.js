const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mall.meizu.com');
    await page.screenshot({
        path: 'example.png'
    });
    browser.close();
})();

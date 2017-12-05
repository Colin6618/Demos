const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://store.meizu.com', {
        waitUntil: 'networkidle2'
    });
    await page.pdf({
        path: 'store2.pdf',
        format: 'A4'
    });

    browser.close();
})();

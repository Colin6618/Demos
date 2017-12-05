const puppeteer = require('puppeteer');
const CREDS = require('./comp/creds');

(async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto(CREDS.flymeLoginURL, {
        waitUntil: 'networkidle'
    });

    const USERNAME_SELECTOR = '#account';
    const PASSWORD_SELECTOR = '#password';
    const BUTTON_SELECTOR = '#login';
    await page.click(USERNAME_SELECTOR);
    await page.type(CREDS.username);
    await page.click(PASSWORD_SELECTOR);
    await page.type(CREDS.password);
    await new Promise(resolve => setTimeout(resolve, 5000));
    // await page.click(BUTTON_SELECTOR);
    // await page.waitForNavigation();

    // await page.pdf({
    //     path: 'hn3.pdf',
    //     format: 'A4'
    // });

    // browser.close();
})();

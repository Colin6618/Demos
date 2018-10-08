/*
1. 直接复制粘贴链接
2. 分享给某个号？
3. 小程序插件？

todo test: 
1. 长图
2. viewport固定有没有问题
*/

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

const uri = "https://mp.weixin.qq.com/s/2TI55y7bRNSQlgVLFcWgvA";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.goto(uri, { waitUntil: "networkidle2" });
    const innerHeight = await page.evaluate(() => {
        var pppHeight = document.body.clientHeight
        window.scrollTo(0, pppHeight);
        return pppHeight;
    });
    console.log(innerHeight);
    await page.screenshot({
        path: `captured/${uri.slice(-5)}-${innerHeight}.png`,
        fullPage: true
    });
    browser.close();
})();

process.on('uncaughtException', (err) => {
    console.log(`Caught exception: ${err}\n`);
    process.exit(1)
});
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
    process.exit(1)
});
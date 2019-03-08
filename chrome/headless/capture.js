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

const uri = "https://mp.weixin.qq.com/s/WepqCg3hR2v3mUSE5a9nmQ";
// const uri = "https://www.zhihu.com/question/22803724/answer/27722982?from=timeline&utm_medium=social&utm_oi=31360777453568&utm_source=wechat_session";
// const uri = "https://mp.weixin.qq.com/s/3OvVJIJBBigrDxXhE7Oxpw";
// const uri = "https://mp.weixin.qq.com/s/2TI55y7bRNSQlgVLFcWgvA";
// TODO: zhihu.com 域名下需要展开阅读全文

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.goto(uri, {
        waitUntil: "networkidle2"
    });
    const innerHeight = await page.evaluate(async () => {
        const pause = async ms => new Promise(resolve => setTimeout(resolve, ms));
        let pageHeight = document.body.clientHeight;
        let screenHeight = window.screen.height || 500;
        for (let index = 0; index < pageHeight / screenHeight; index++) {
            let eachOffset = screenHeight / 4;
            // using promise chain cannot get the result expected, which is a big question
            window.scrollBy(0, eachOffset);
            await pause(100);
            window.scrollBy(0, eachOffset);
            await pause(100);
            window.scrollBy(0, eachOffset);
            await pause(100);
            window.scrollBy(0, eachOffset);
            await pause(100);
        }
        return pageHeight;
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
    process.exit(1);
});
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
    process.exit(1);
});

// this can be run , but async mode will not help to wait all the img loaded
// setTimeout(function () {
//     window.scrollBy(0, eachOffset);
// }, 501 * index - 334)
// setTimeout(function () {
//     window.scrollBy(0, eachOffset);
// }, 501 * index - 167)
// setTimeout(function () {
//     window.scrollBy(0, eachOffset);
// }, 501 * index)

// using promise chain cannot get the result expected, which is a big question
// pause(1)
// .then(window.scrollBy(0, eachOffset)).then(pause(100))
// .then(window.scrollBy(0, eachOffset)).then(pause(100))
// .then(window.scrollBy(0, eachOffset)).then(pause(100))
// .catch(e => {})
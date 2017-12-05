const puppeteer = require("puppeteer");
const creds = require('./comp/creds.js');
(async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    // await page.emulate(iPhone);
    page.on("console", (...args) => console.log("PAGE LOG:", ...args));

    // await page.goto(
    //   creds.luckymoneyLogin,
    //   { waitUntil: "networkidle" }
    // );
    // await page.click('#toAccountLogin');
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // await page.focus('#account');
    // await page.type(creds.username);
    // await page.focus('#password');
    // await page.type(creds.password);
    // await new Promise(resolve => setTimeout(resolve, 8000));
    // await page.click('#login');
    // await page.waitForNavigation();
    // page.waitForSelector('#_lucky-money-canvas').then(
    //   () => console.log('First canvas')
    // )
    // 100,150 740,550

    await page.goto(
        'http://10.2.85.115:8080/', {
            waitUntil: "networkidle"
        }
    );
    // await page.waitForSelector('._lucky-money-canvas').then(
    //   () => console.log('First canvas')
    // )
    await new Promise(resolve => setTimeout(resolve, 5000));

    // page.touchscreen.tap(x, y)
    // 10,72 to 300,540
    // var xstart = 10, xend = 300, ystart = 72, yend = 540, gap = 5;
    var xstart = 60, xend = 800, ystart = 100, yend = 600, gap = 5;

    // await page.touchscreen.tap(170, 120);
    // var click = page.touchscreen.tap;
    var click = page.mouse.click;
    // await new Promise(resolve => setTimeout(resolve, 300));
    // while (true) {
    //     for (x = xstart; x < xend; x += gap) {
    //         for (y = ystart; y < yend; y += gap) {
    //             click(x, y);
    //             // console.log(x, y, 'tap');
    //         }
    //     }
    //     await new Promise(resolve => setTimeout(resolve, 1000));
    //     console.log('clicked');
    // }

    setInterval(function() {
      page.mouse.click(100, 200);
      console.log('click1');
    }, 200);
    setInterval(function() {
      page.mouse.click(200, 300);
      console.log('click2');
    }, 200);
    setInterval(function() {
      page.mouse.click(300, 400);
      console.log('click3');
    }, 200);



    // const links = await page.evaluate(() => {

    // const anchors = Array.from(document.querySelectorAll('#div[class^=topicItem]'))
    // console.log(anchors.length);
    // const anchorsLinks = anchors.map(anchor => {
    //   console.log(anchor.querySelectorAll);
    //   return anchor.querySelectorAll('.enableVisited')[0];
    //   // return anchor.textContent;
    // })
    // return anchorsLinks;

    // });

    // console.log(links.join("\n"));
    await new Promise(resolve => setTimeout(resolve, 10000));
    browser.close();
})();

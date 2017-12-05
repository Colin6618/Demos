const puppeteer = require("puppeteer");

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on("console", (...args) => console.log("PAGE LOG:", ...args));

    await page.goto("https://readhub.me/", { waitUntil: "networkidle" });

    const links = await page.evaluate(() => {

        const anchors = Array.from(document.querySelectorAll('#div[class^=topicItem]'))
        // console.log(anchors.length);
        // const anchorsLinks = anchors.map(anchor => {
        //   console.log(anchor.querySelectorAll);
        //   return anchor.querySelectorAll('.enableVisited')[0];
        //   // return anchor.textContent;
        // })
        // return anchorsLinks;

    });

    console.log(links.join("\n"));

    browser.close();
})();

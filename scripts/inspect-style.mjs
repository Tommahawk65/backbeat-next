import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("http://localhost:3000/repertoire", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2000);
const result = await page.evaluate(() => {
  const span = [...document.querySelectorAll("span")].find(s => s.textContent?.includes("songs ·"));
  if (!span) return { found: false };
  const cs = getComputedStyle(span);
  return {
    found: true,
    textContent: span.textContent,
    innerHTML: span.innerHTML,
    wordSpacing: cs.wordSpacing,
    letterSpacing: cs.letterSpacing,
    textTransform: cs.textTransform,
    fontSize: cs.fontSize,
  };
});
console.log(JSON.stringify(result, null, 2));
await browser.close();

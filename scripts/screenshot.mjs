import { chromium } from "playwright";

const [, , urlArg, vpArg, outArg, modeArg, selectorArg] = process.argv;
const url = urlArg ?? "http://localhost:3000/";
const [w, h] = (vpArg ?? "1440x900").split("x").map(Number);
const out = outArg ?? `tmp/shot-${Date.now()}.png`;
const fullPage = modeArg === "full";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: w, height: h },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(800);

if (selectorArg) {
  const el = page.locator(selectorArg).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await el.screenshot({ path: out });
} else {
  await page.screenshot({ path: out, fullPage });
}
await browser.close();
console.log(out);

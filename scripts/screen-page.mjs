import { chromium } from "playwright";

const [, , urlPath, vpArg, outArg, modeArg] = process.argv;
const [w, h] = (vpArg ?? "1440x900").split("x").map(Number);
const out = outArg ?? `tmp/shot-${Date.now()}.png`;
const fullPage = modeArg === "full";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: w, height: h },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(`http://localhost:3000${urlPath}`, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2500);

try {
  const reject = page.locator('button:has-text("Reject")').first();
  if (await reject.isVisible({ timeout: 800 })) {
    await reject.click();
    await page.waitForTimeout(400);
  }
} catch {}

await page.screenshot({ path: out, fullPage });
await browser.close();
console.log(out);

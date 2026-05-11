import { chromium } from "playwright";

const [, , urlPath, vpArg, outArg, textArg] = process.argv;
const [w, h] = (vpArg ?? "390x844").split("x").map(Number);
const out = outArg ?? `tmp/shot-${Date.now()}.png`;
const txt = textArg ?? "Acoustic";

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

const target = page.getByText(txt, { exact: false }).first();
await target.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: out, fullPage: false });
await browser.close();
console.log(out);

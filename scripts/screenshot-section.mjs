import { chromium } from "playwright";

const [, , vpArg, outArg, sectionId] = process.argv;
const [w, h] = (vpArg ?? "1440x900").split("x").map(Number);
const out = outArg ?? `tmp/shot-${Date.now()}.png`;
const id = sectionId ?? "reviews";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: w, height: h },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(3000);

// Dismiss cookie consent
try {
  const reject = page.locator('button:has-text("Reject")').first();
  if (await reject.isVisible({ timeout: 1000 })) {
    await reject.click();
    await page.waitForTimeout(500);
  } else {
    const accept = page.locator('button:has-text("Accept")').first();
    if (await accept.isVisible({ timeout: 1000 })) {
      await accept.click();
      await page.waitForTimeout(500);
    }
  }
} catch {}

await page.evaluate((sectionId) => {
  document
    .getElementById(sectionId)
    ?.scrollIntoView({ behavior: "instant", block: "start" });
}, id);
await page.waitForTimeout(1200);

const section = page.locator(`#${id}`);
await section.screenshot({ path: out });
await browser.close();
console.log(out);

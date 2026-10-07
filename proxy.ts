import { NextResponse, type NextRequest } from "next/server";

// Pages pruned in the Aug 2026 cull with no genuinely-relevant successor.
// Returning 410 signals to Google that these are intentionally gone and
// should drop out of the index faster than a 404 or soft-404.
const GONE_SLUGS = new Set<string>([
  // Counties outside the Hampshire-adjacent service area
  "kent",
  "somerset",
  "gloucestershire",
  "buckinghamshire",
  "bristol",
  "greater-london",
  "east-devon",
  // Cities in killed counties with no appropriate redirect target
  "marlow",
  "tunbridge-wells",
  "bath",
  "cheltenham",
  "exeter",
  // Venues in killed counties
  "buxted-park",
  "hever-castle",
  "penshurst-place",
  "leeds-castle",
  "babington-house",
  "priston-mill",
  "berkeley-castle",
  "elmore-court",
  "owlpen-manor",
  "hedsor-house",
  "notley-abbey",
  "stowe-house",
  "hartwell-house",
  "fulham-palace",
  "hampton-court-palace",
  "hurlingham-club",
  "kew-gardens",
  "syon-park",
]);

const GONE_BODY = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>Page removed · Backbeat</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{font-family:system-ui,sans-serif;max-width:40rem;margin:4rem auto;padding:0 1.5rem;color:#18181b;line-height:1.6}a{color:#b45309}</style>
</head>
<body>
<h1>This page has been removed.</h1>
<p>It is no longer available on backbeat-band.co.uk.</p>
<p>Head to the <a href="/">homepage</a> or the <a href="/wedding-bands">wedding bands hub</a> for current pages.</p>
</body>
</html>`;

export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^\/wedding-bands\/([^/]+)\/?$/);
  if (match && GONE_SLUGS.has(match[1])) {
    return new NextResponse(GONE_BODY, {
      status: 410,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/wedding-bands/:slug",
};

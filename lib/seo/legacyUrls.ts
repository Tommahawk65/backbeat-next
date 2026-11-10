// Single source of truth for URLs removed or restructured. Read by
// next.config.ts (301s), proxy.ts (410s) and the temporary legacy sitemap.

// Old-structure county URLs (/{county}-weddings) from the original site.
// Each redirects 301 to /wedding-bands/{county}.
export const legacyCountySlugs = [
  "hampshire",
  "surrey",
  "berkshire",
  "west-sussex",
  "dorset",
  "wiltshire",
  "oxfordshire",
  "isle-of-wight",
];

// Venue slugs pruned in the Aug 2026 cull. Each redirects 301 to the parent
// county so any inbound equity flows to a surviving page.
export const venueToCounty: Record<string, string> = {
  // Hampshire
  "avington-park": "hampshire",
  "burley-manor": "hampshire",
  "chewton-glen": "hampshire",
  "clock-barn": "hampshire",
  "four-seasons-hampshire": "hampshire",
  "froyle-park": "hampshire",
  "heckfield-place": "hampshire",
  "highclere-castle": "hampshire",
  "lainston-house": "hampshire",
  "pylewell-park": "hampshire",
  "rhinefield-house": "hampshire",
  "solent-hotel": "hampshire",
  "somerley-house": "hampshire",
  "the-elvetham": "hampshire",
  "tylney-hall": "hampshire",
  "the-square-tower": "hampshire",
  // Surrey
  beaverbrook: "surrey",
  "bury-court-barn": "surrey",
  "farnham-castle": "surrey",
  foxhills: "surrey",
  "great-fosters": "surrey",
  "loseley-park": "surrey",
  "millbridge-court": "surrey",
  "northbrook-park": "surrey",
  "pennyhill-park": "surrey",
  // Berkshire
  "cliveden-house": "berkshire",
  "coworth-park": "berkshire",
  "donnington-grove": "berkshire",
  "lillibrooke-manor": "berkshire",
  "oakley-court": "berkshire",
  "royal-berkshire-hotel": "berkshire",
  "the-vineyard": "berkshire",
  "wasing-park": "berkshire",
  // West Sussex
  "amberley-castle": "west-sussex",
  "arundel-castle": "west-sussex",
  bailiffscourt: "west-sussex",
  "cowdray-house": "west-sussex",
  "findon-place": "west-sussex",
  "goodwood-house": "west-sussex",
  "gravetye-manor": "west-sussex",
  "south-lodge": "west-sussex",
  "southdowns-manor": "west-sussex",
  "tinwood-estate": "west-sussex",
  "wiston-house": "west-sussex",
  // Dorset
  athelhampton: "dorset",
  "almer-manor": "dorset",
  "highcliffe-castle": "dorset",
  "lulworth-castle": "dorset",
  mapperton: "dorset",
  "smedmore-house": "dorset",
  "sopley-mill": "dorset",
  // Wiltshire
  "euridge-manor": "wiltshire",
  "larmer-tree-gardens": "wiltshire",
  "lucknam-park": "wiltshire",
  "manor-house-castle-combe": "wiltshire",
  syrencot: "wiltshire",
  "whatley-manor": "wiltshire",
  // Oxfordshire
  "blenheim-palace": "oxfordshire",
  "caswell-house": "oxfordshire",
  "cornwell-manor": "oxfordshire",
  "estelle-manor": "oxfordshire",
  "le-manoir-aux-quat-saisons": "oxfordshire",
  "stratton-court-barn": "oxfordshire",
};

// City slugs pruned in the Aug 2026 cull. Redirect 301 to parent county.
export const cityToCounty: Record<string, string> = {
  guildford: "surrey",
  reading: "berkshire",
  chichester: "west-sussex",
  brighton: "west-sussex",
  bournemouth: "dorset",
  salisbury: "wiltshire",
  oxford: "oxfordshire",
};

// County slugs pruned in the Aug 2026 cull where a genuinely-adjacent
// survivor exists. Everything else goes to 410 via middleware.
export const countyToCounty: Record<string, string> = {
  "east-sussex": "west-sussex",
};

// Pages pruned in the Aug 2026 cull with no genuinely-relevant successor.
// Returning 410 signals to Google that these are intentionally gone and
// should drop out of the index faster than a 404 or soft-404.
export const GONE_SLUGS = new Set<string>([
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

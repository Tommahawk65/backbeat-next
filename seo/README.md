# Backbeat — Raw Data Bundle

Source: Google Search Console (`sc-domain:backbeat-band.co.uk`) and Instagram organic (`@backbeatlive`), via Windsor.ai.
Pulled: 24 June 2026.

## Files

| File | What's in it | Window | Rows |
|---|---|---|---|
| `summary_last_90d.csv` | Headline metrics + notable callouts | 90d | 12 |
| `daily_totals_last_90d.csv` | Day-by-day clicks/impressions/CTR/position | 26 Mar – 22 Jun 2026 | 89 |
| `queries_last_90d.csv` | All search queries with ≥1 impression, sorted desc by impressions | 90d | 597 |
| `pages_last_90d.csv` | All landing pages with ≥1 impression, sorted desc by impressions | 90d | 116 |
| `devices_last_90d.csv` | Split by mobile / desktop / tablet | 90d | 3 |
| `countries_last_90d.csv` | Country breakdown, sorted desc by impressions | 90d | 78 |
| `branded_vs_nonbranded_last_90d.csv` | Branded ("backbeat" in query) vs everything else | 90d | 2 |
| `instagram_daily_last_30d.csv` | Daily Instagram engagement | 25 May – 23 Jun 2026 | 30 |
| `instagram_account_snapshot.csv` | Profile snapshot (followers, bio, etc.) | now | 1 |

## Notes / caveats

- Search Console data has its usual 1–3 day reporting lag, so the most recent days may understate.
- `position` is Google's average SERP position (lower is better; 1 = first organic result).
- `ctr` is a decimal (0.0123 = 1.23%).
- Branded/non-branded split is computed by string-matching "backbeat" / "back beat" in the query, not by Search Console's built-in flag (which was returning per-query rather than aggregated).
- Meta Ads and Google Analytics are **not** connected in Windsor.ai yet, so this bundle contains organic search + organic Instagram only. No paid ad spend, no on-site behaviour data.
- Instagram new-follower data is unavailable because the account has fewer than 100 followers (Instagram API limitation).

## See also

- `../backbeat-seo-brief.md` — written analysis, diagnosis, and prioritised action list based on this data.

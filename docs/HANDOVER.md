# Ipswich BUG site: status and handover

Last updated 18 October 2026. Work done in a Claude Code session on 11 October 2026.

## Where things stand

A complete static replacement for https://www.ipswich-bug.org (WordPress on AWS) is built in this repo. Since 18 October 2026 it is published as a preview at https://ipswichbug.github.io from the `ipswichbug` GitHub organisation (repo `ipswichbug/ipswichbug.github.io`); every push to `main` redeploys it. The real domain still points at WordPress. `npm install && npm run dev` to view it locally.

All content from the old site is migrated: two posts (29 Jul and 3 Aug 2026), the contact details, and the images. Copies of the raw WordPress exports are not kept; the REST API at `https://www.ipswich-bug.org/index.php?rest_route=/wp/v2/posts` can be re-pulled while the old site is up.

## Decisions made

| Decision | Why |
|---|---|
| Eleventy 3, ES-module config, no JS framework | Smallest thing that builds Markdown into pages. Maintainer edits files on GitHub, no server to run. |
| Hand-written CSS, system fonts | No build pipeline beyond Eleventy. Brand green `#143a25` sampled from the logo. |
| Leaflet + OpenStreetMap tiles for maps | Free, no API key, no account. |
| Issues as Markdown with front matter (status, category, lat/lng, ask, milestone, updates log) | Status as data, not prose, so it can be filtered and doesn't rot like Brisbane North BUG's tracker did. |
| GitHub Pages via Actions | Free, simple. Cloudflare Pages or Netlify are drop-in alternatives (`npm run build`, output `_site`). |
| Decap CMS config at `/admin/` but not wired up | Gives a WordPress-style editor later if GitHub editing proves too hard. Needs OAuth setup first. |
| No rides page | Organising and insuring group rides is too hard for now. Any riding is informal, after a meeting, and the site doesn't advertise it. |
| `src/CNAME` set to `www.ipswich-bug.org` | Assumes GitHub Pages. Remove if hosting elsewhere. |

## What the research said

Full notes: `research-queensland-bugs.md` and `research-australian-bugs.md` in this folder (about 40 interstate groups and all 23 Queensland groups in Bicycle Queensland's directory).

Patterns this site copies:

- Dated posts on the home page as the trust signal (every credible BUG does this; stale undated pages are the commonest failure).
- Per-issue "request for action" page: location, evidence, numbered asks, dated correspondence log with reference numbers and PDFs, quoted responses (Brisbane North BUG, CAMWEST).
- Status chips with counts, map pins, next-milestone text, "register last reviewed" date, "suggest a location" (Pedal Power ACT).
- Submissions library with linked responses (Bicycle NSW).
- "Write to your councillor" and "whose road is that" pages (Space4Cycling Brisbane).
- Hazard reporting that signposts council's channel rather than a home-grown form (everyone), with an escalation path (WestCycle).

Things nobody in Queensland has that this site does: an issues map, status filtering, a resources page collecting council and TMR plans.

Ideas not built yet: a dated "wins" page (Pedal Power, Boroondara), rider-confidence rating of council's official routes (Newcastle "Map the Gaps"), per-event ICS calendar links (Sunshine Coast BUG), a policies section (Space4Cycling).

## Inputs needed before launch

1. Facebook URL. `src/_data/site.json` guesses `facebook.com/groups/ipswichbug`.
2. Membership model: free? Incorporated? Bicycle Queensland affiliated? (`src/join.md`, `src/about.md`)
3. Committee names and roles if they consent to being listed; meeting time and place. (`src/about.md`, `src/join.md`)
4. Committee sign-off on the two draft issues in `src/issues/`. Statuses and asks were inferred from the posts.
5. Domain: who holds it and where DNS is (probably Route 53). README has the GitHub Pages records.
6. Whether to list councillor emails on `src/take-action.md`. Names and divisions as at October 2026 are in an HTML comment there.
7. Ipswich BUG is not in Bicycle Queensland's BUG directory; email info@bq.org.au.

Every placeholder in the content is marked with an HTML comment starting `<!-- TODO`. `grep -rn TODO src` lists them.

## Launch steps

1. ~~Create the GitHub repo, push `main`.~~ Done.
2. ~~Settings → Pages → Source: GitHub Actions.~~ Done.
3. Settings → Pages → Custom domain `www.ipswich-bug.org`, Enforce HTTPS.
4. DNS: `www` CNAME to `<owner>.github.io`; apex A records to 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
5. Once the new site is live, shut down the AWS WordPress instance (and its EBS volume, Elastic IP, and any load balancer) to stop the bill.

## Verification notes

- Links on the Resources, Report and Take action pages were checked by fetching page content. `ipswich.qld.gov.au` and `tmr.qld.gov.au` return 403 to plain HTTP tools, so a scripted link checker will report false failures for them.
- Screenshots were taken with headless Chrome. Headless Chrome won't render below about 500 px wide, so phone layout was checked by framing the pages in 390 px iframes.

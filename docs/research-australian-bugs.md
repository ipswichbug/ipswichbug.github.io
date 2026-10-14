# Australian (non-QLD) bicycle user group & advocacy websites: structural survey

Researched 11 Oct 2026 for the Ipswich BUG rebuild. Method: WebFetch/WebSearch of each site plus curl for sites that block fetchers (Bike North) and for JS-rendered data (Pedal Power). Queensland groups deliberately excluded.

Legend for "update cadence": the newest dated item found on the site.

---

## 0. Executive patterns (read this first)

1. **Platform split.** Peak bodies and the larger BUGs are WordPress (Bicycle NSW, Bicycle Network, WestCycle, Bike Adelaide, BIKEast, Boroondara, Yarra, Merri-bek, Darebin, Banyule, Whittlesea, IWBC, Whitehorse, Unley, Bike South West). Squarespace: Pedal Power ACT, IBUG, Port Phillip BUG. Wix: Newcastle Cycleways, CCBUG, Unley (old site). ClubExpress (ASP.NET club SaaS): Bike North. Hand-coded static HTML: CAMWEST. Facebook-only: nearly every SA suburban BUG, GO BUG (WA), Fremantle BUG, Bike Geelong, Ballarat BUG, Wagga, Northern Beaches, Blue Mountains.
2. **Dead/zombie sites are common.** bikesydney.org has lapsed and is now a casino-affiliate site; bikeleichhardt.nfshost.com is an empty WordPress default; Bike Bendigo's .org.au is gone (now bikebendigo.com, no advocacy). Merri-bek's blog archive stops Nov 2022. Lesson: static + cheap domain renewal, and avoid content that visibly rots (prefer "last reviewed" dates).
3. **News is mostly a dated blog**; the best-maintained are weekly (Bike North "Chain Reaction" newsletter archive, Pedal Power daily-ish news). Several BUGs route news to Facebook only and the website decays.
4. **Advocacy presentation tiers:**
   - Tier 1 (rare, best): structured **per-location project tracker with status + map** — Pedal Power ACT electorate pages (JSON-driven Leaflet map, statuses Needs action / In progress / Win); CAMWEST advocacy page (per-project blocks with "Updated: Mon YYYY", map-marker deep links into their own OSM map, links to council docs and own submission PDFs).
   - Tier 2: **per-campaign page with dated timeline** — Bicycle Network (Battery Point: "Campaign status" reverse-chronological dated list), Bicycle NSW project updates (Oxford St East: "Project status" dated milestones + documents + how to help), Boroondara (Toorak Rd Bridge: timeline 2008–2024, council motion quoted, "Current status"), Yarra BUG (Elizabeth St: 3-part dated chronology quoting council resolutions).
   - Tier 3: **submissions library** as a dated list grouped by year (Bicycle NSW, Bicycle Network, Pedal Power, BIKEast grouped year>council, IBUG, Port Phillip (Google Drive links)).
   - Tier 4: prose "campaigns" page (Merri-bek, Darebin, Whittlesea) and "wins" pages (Boroondara, Newcastle, Whittlesea, Pedal Power's 73 wins filtered by electorate).
5. **"Report a hazard" is almost always a signpost page, not a form**: Boroondara "See a problem?", Bike Adelaide "Reporting Problems", WestCycle "Report a Ride Hazard", Whittlesea, Port Phillip all point to the council form / Snap Send Solve / state roads authority, with WestCycle adding an escalation path ("no reply after 10 business days -> forward chain to us"). Only Pedal Power runs its own community map with a self-report button.
6. **Rides calendars**: Buncheur (Bicycle NSW shared BUG calendar, used by CAMWEST and Bike South West), Meetup (BIKEast, Newcastle), ClubExpress event calendar with colour-coded grade categories (Bike North), embedded Google Calendar (Darebin, Merri-bek), Team App (Whittlesea), weekly "What's On" table with Strava/Google Map links (Banyule), Wix Events (Newcastle). Grading schemes: Bike North's 5-level colour grade + pace scale + Ride Difficulty Index is the gold standard.
7. **Membership**: either own fee (Bike North $45/yr via ClubExpress; CAMWEST $10 via form + EFT; Darebin $20 via PDF form; Tamar $20) or free (Bike Adelaide, Newcastle, Merri-bek "join the list"). Almost all push Bicycle NSW/Bicycle Network membership for insurance and note "our membership does not include insurance".
8. **Council plan links**: usually buried. CAMWEST is best (per-council "Project Documentation" links); Newcastle links council project pages + Overpass-Turbo live OSM maps of works under construction/proposed; IWBC has "Current Council Bike Projects" and "Inner West Council Plans" pages; Boroondara links council strategy and committee minutes inline.

---

## 1. Peak / state bodies

### Bicycle NSW — https://bicyclensw.org.au/
- **Platform:** WordPress (Shuttle Themes). Members portal external.
- **Nav:** About us | Insurance for you | Membership | Cycling resources | Spring Cycle 2026 | Advocacy | Donate now. Sticky "Join" banner.
- **News:** /cycling-news/ card carousel; dated posts (e.g. 22/09/2026 "Cycling is booming in Sydney"). Newsletter signup in footer. Social: FB, IG, YouTube, LinkedIn, Strava.
- **Advocacy:** /advocacy/ landing with four pillars:
  - **Our campaigns** /advocacy/campaign-updates/ — stacked title+image cards (no summary/status/date). 17 campaigns incl. Changing Gears plan, e-mobility, Oxford Street, safe speed limits, bollard busting, MPD, election campaigns, rail trails, bikes on trains.
  - **Project updates** /advocacy/project-updates/ — 10 infrastructure projects as title+image cards (Harbour Bridge ramp, Sydney Metro, Warringah Fwy, Sydney Gateway, Oxford St East, Rozelle, M7/M12, Parramatta LR, M6, Sutherland–Cronulla). **Per-project page format (Oxford St East)**: background -> "A missing link" -> "Streetscape improvements" -> **"Project status"** dated milestone list (Feb 2023 concept exhibited + our submission; mid-2023; Dec 2023 TfNSW report; Jul 2024; Nov 2025 strategy) -> what we asked for (inline) -> community concerns -> **documents** (own submissions PDFs + TfNSW reports + map) -> **how to help** (petition w/ signature count, survey, join, donate) -> related dated articles feed.
  - **Recent submissions** /advocacy/recent-submissions/ — grouped by year headings (2026…"2020 and earlier"), each "DD Month YYYY - Title" linking PDF, occasionally "and the Response". ~55 entries in 2026 alone. No filters.
  - **Ray's Corner** policy & design guide library.
- **Rides:** BUG Ride Calendar at bicyclensw.buncheur.com (shared tool BUGs log rides into; filterable by author group); plus Spring Cycle, Ride2Work pages.
- **Membership:** insurance-led ($; household option), refer-a-friend, supporter tier.
- **BUG directory:** /bicycle-user-groups/ ("Join your local BUG") with embedded map that fails without JS and an empty "list of affiliated BUGs" heading; each BUG has a listing post at /network/bug/<slug>/ (e.g. /network/bug/canadabay/) with only name + prose description — no website/email/map fields. Also a "BUG showcase" blog tag. **Weak as a directory; don't copy.**
- **Good:** project-update page template; year-grouped submission list with responses; shared ride calendar.
- **Bad:** campaign/project index cards carry no status or date; BUG map broken without JS.

### Bicycle Network (Vic + Tas, national) — https://bicyclenetwork.com.au/
- **Platform:** WordPress. Campaign microsites spun out on Vercel (scc-campaign.vercel.app).
- **Nav:** Rides & Events | Membership | Our Advocacy | Our Services | Tips & Resources | Ride2School; utility: About, Contact, Newsroom, Login, Become a Member, Donate. **State filter row (ALL ACT NSW … WA)** in header.
- **News:** /newsroom/ dated cards (URL dates); latest 9 Oct 2026. Email signup with state dropdown.
- **Advocacy:** /our-advocacy/ card grid (image, title, one-liner) + "Ongoing" and "Previous" campaign collections. **Campaign page format (Battery Point Foreshore, Hobart)**: H1 + "#TogetherWeCan" tagline -> **The problem** (3 bullets + photo "End of the Sandy Bay Road bike lanes") -> **The solution** (what we want, with satellite image + concept render) -> **Campaign status** = reverse-chronological dated entries Oct 2017 -> Aug 2026 linking council minutes, news, funding docs -> **Take action** (join / share). No map, no petition.
  - Submissions /our-advocacy/submissions-2/ — collapsible year sections 2018–2026, month-only dates, PDF links.
  - **SCC "Gimme 5!" microsite** (scc-campaign.vercel.app): address lookup -> shows Strategic Cycling Corridor network near you + your electorate + local community groups -> email your candidates. Data credits VEC, DoT, OSM. **A model for an address-driven "what's planned near me" tool.**
  - Services: Crash/near-miss Reporter, bike counts, Parkiteer.
- **BUG directory:** /tips-resources/maps-and-rides/bicycle-user-groups-bugs/ — interactive map only (click pin for contact, website, advocacy goals); groups self-submit via survey; policy "only groups advocating for improvements are added". Newsroom article "BUGs: grassroots advocacy at its best" (20 Apr 2026) covers BUG history (Bicycle Victoria founded ~30 BUGs in 1990).
- **Tasmania:** no separate site; Tas campaigns (Battery Point, Collins St, Derwent Valley & North East rail trails, Tas council elections 2026) live under /our-advocacy/ with the TAS state filter.
- **Good:** campaign status timeline; state filter; microsite pattern.
- **Bad:** campaign cards have no status field; submissions list has broken links.

### Pedal Power ACT — https://pedalpower.org.au/  ***(best advocacy UX in the country)***
- **Platform:** Squarespace + heavy custom code blocks (Leaflet 1.9.4, inline JS data); membership/shop on TidyHQ; "community map (beta)" embedded from a third-party domain.
- **Nav:** Ride (Ride in Canberra, Maps & Routes, Social Rides & Tours, Getting Started, Rules & Safety, E-Bikes) | Programs | Membership (Join, Manage, Discounts, Insurance) | Advocacy (Overview, Current campaigns, Our Wins, Advocacy Plan 2025–2030, Local advocacy, Our submissions) | Get Involved (About, Board & Governance, Volunteer, Latest News, NewsWheel, Events, Ride2Work, Store). Header: Join + Members login + search.
- **News:** /news — cards with image, dateline, headline, summary; 5+ posts on 6/10/26 alone. Fortnightly newsletter (signup block currently misconfigured).
- **Advocacy page /advocacy** (anchored one-pager): hero + jump links -> 4 numbered campaign cards ("Campaign 01 Separate bike lanes on Northbourne Avenue" -> /northbourne) -> **email-the-Minister form** -> **Live map [Beta]** (closures, community-reported hazards, self-report button) -> **Our wins**: "73 wins" with electorate filter buttons (All/Kurrajong/Murrumbidgee/Ginninderra/Yerrabi/Brindabella) + 17 "Canberra-wide wins" numbered 01–04… (title + description; no dates) -> Advocacy Plan 2025–2030 (4 priorities, expandable) -> **Your electorate** 5 cards -> collaboration & accountability bullets -> advocacy tools (report issue, contact MLAs, resources) -> **Our submissions**: latest (bold month-year + title + PDF ↗) and archive by year with counts ("2025 — 14 submissions", expandable) -> join advocacy team.
- **Campaign page format (/northbourne, /safestreets)**: hero headline + two jump buttons -> section nav (The story / The problem / What we are asking for / Why it matters / Take action) -> dated story with 3-milestone "How change happened" timeline -> numbered problems -> the ask -> 4 "why it matters" cards -> **mailto-generating form** (first/last name, email, postcode, optional comment -> "Prepare email to Minister"; disclosure: nothing stored; "recipients verified 15 Sep 2026"). /safestreets adds stat tiles (10% / 40% / 70%+ with sources) and six "priority zones" each with "Email [electorate] MLAs" link, and an electorate dropdown.
- **Electorate pages (/kurrajong, /yerrabi, …) = PROJECT TRACKER.** Hero "RIDE FOR CHANGE · KURRAJONG — Your streets. Your cycling future." with "Explore the live map" + "Report a local issue". Sections: Map | Projects | Canberra-wide wins | Latest updates | Timeline | Get involved. Status filter chips **Needs action (!, orange) / In progress (↗, blue) / Wins (✓, navy)** with counts; "N local projects mapped" + "Suggest a location →"; project list cards + Leaflet map pins; "Archive reviewed September 2026"; "1974 TO TODAY · 10 MAJOR MOMENTS" timeline; "Change you can see" strip; "Open Fix My Street ↗" for maintenance. Data is an inline JS array (57 projects on Kurrajong: 25 win / 17 issue / 15 progress). **Schema per project:**
  `{"id":"northbourne-slip-lane","title":"Northbourne Avenue ABC slip-lane crossing","status":"issue","period":"Urgent safety issue raised August 2026","summary":"The crossing outside ABC Canberra creates a serious conflict… Pedal Power is calling for an immediate safe treatment.","link":"/northbourne","social":"https://www.facebook.com/pedalpoweract/posts/…","location":"Northbourne Avenue slip lane beside ABC Canberra, at Wakefield Avenue","pins":[[-35.26046,149.13246,"…"]]}`
  Other examples: `"status":"win","period":"Advocated and designed from 2023 · core section completed"`; `"status":"progress","period":"Stage 2 design underway · construction expected from 2027","link":"https://www.cityservices.act.gov.au/…/garden-city"`. Note the free-text "period" field doubling as status detail + date, and "link" pointing to either own campaign/news page or the government project page.
- **Rides:** Social Rides & Tours + Events page; Ride2Work featured.
- **Membership:** 4 tiers with monthly/annual pricing (Individual $12.59/mo or $141.75/yr), non-rider Supporter $30; insurance included.
- **About:** Board & Governance, Staff, Careers; "Authorised by…" line; land acknowledgement + inclusion statement.
- **Good:** everything above; one of the few sites where advocacy is the product.
- **Bad:** electorate tracker is JS-only (empty without JS; fetchers see zeros); newsletter block broken; map embedded from odd third-party host.

### WestCycle (WA) — https://www.westcycle.org.au/
- **Platform:** WordPress (custom; /wc-event/ post type).
- **Nav:** Membership | Let's Ride | eRideables | Schools | Programs | Advocacy | Events | About Us | News; utility Login/Become a Member/Shop/Search.
- **News:** /news/ card grid with category filter (Advocacy, Community events, e-bikes, eRideables, Events, MTB, Newsletters, Road, Transport); no dates on cards (bad). Monthly subscriber e-News archived as posts. Latest Oct 2026.
- **Infrastructure Updates** /news/infrastructure-updates/ — separate feed with filters Consultation / Disruptions / Major Works / Metro Central; each item = detour-map thumbnail + location-led title ("Long Term Closure: Tonkin Highway PSP Rowley Rd to Thomas Rd") + excerpt "WestCycle have been advised… from 14/05/2026 to 10/06/2026". Updates get suffixed "2", "3".
- **Path Detour Map** /path-detour-map/ — interactive map of Principal Shared Path disruptions fed from Main Roads Travel Map data, CyclOSM toggle, and **"RATE THIS DETOUR" survey (Easy to follow / Feels safe / Quick & easy + comments)**; ratings sent to Main Roads every Wednesday. Plus "Detour Checklist" and "Big Project Wayfinder".
- **Report a Ride Hazard** /report-a-ride-hazard/ — no form; a guide: identify responsible agency (100+ LGAs), one hazard per report, photos <10MB, GPS/marked map, keep copy, note reference number, **wait 10 business days then forward the email chain to WestCycle for escalation**; Main Roads / PTA emails; police for motorbikes on paths. Tone sections "Respectful responses / Be reasonable / Be helpful".
- **Advocacy:** Our Approach, Resources, e-mobility inquiry response; no per-campaign pages. Hazard page doubles as board page (sloppy).
- **Rides/events:** date/name/location cards; categories Ride2Work, Rainbow Rides.
- **Membership:** rider vs e-scooter member types; insurance.
- **About:** staff, strategies & plans, governance, board bios.
- **Good:** disruptions feed + detour map + rating loop; escalation protocol.
- **Bad:** undated news cards; typos; advocacy thin on specific projects.

### Bike Adelaide (formerly Bicycle Institute of SA / BISA) — https://www.bisa.asn.au/ (also bikeadelaide.azurewebsites.net; mid domain transition)
- **Platform:** WordPress (Customizr), on Azure.
- **Nav:** About | Join us | Advocacy (Overview, Policies, Projects, Principles, Strategies, Why Cycle) | News (Latest, Pedal Update) | Super Tuesday Count | Donations | Bicycle User Groups | Contact | Resources (Links, Bikes for Refugees, Reporting Problems, Traffic Watch) | Apps and Closures.
- **News:** "Load more" cards; recent posts are mostly submissions (Charles Sturt, Mitcham, SAMSB street circuit, e-bike review) — latest Sept 2026. Pedal Update monthly e-news (Mailchimp) + archives back to 1983.
- **Advocacy:** submissions published as news posts (no library); Projects page is just 10 artboard images (bad); Policies/Principles/Strategies pages.
- **Reporting Problems** page: council (ask for Bicycle Officer), Snap Send Solve, MyLocalServices app, DIT complaints page for arterials; hazards explained (potholes, glass, caltrop w/ removal video). **Traffic Watch** page: how to report dangerous driving to SAPOL (131 444 / online form), what to record, what happens.
- **BUG directory** (/bugs/ on azurewebsites): alphabetical list, each = heading + contact name + Facebook group link (16 BUGs: Adelaide Hills, Active Transport Adelaide, Burnside, Coast to Vines, Campbelltown, Mitcham, Mt Barker, NPSP, Port BUG, Prospect, Salisbury, Unley, West Torrens, Westside, Kangaroo Island, Barossa) + "Start a new BUG" with two downloadable how-to PDFs from Port BUG and Westside BUG. Together = "State Advocacy Network".
- **Membership:** free; JOIN US banner. Rides: none (not a rides body).
- **Good:** reporting/traffic-watch resource pages; BUG starter kit PDFs.
- **Bad:** projects as images; dual domain; news = submissions only.

---

## 2. NSW local groups

### BIKEast (Eastern Sydney) — https://www.bikeast.org.au/
- **Platform:** WordPress (SiteOrigin theme, MetaSlider).
- **Nav:** What we do (Eco-Travel to School grant, Rides, Meetings, Submissions) | Programs/Services (Cycling Without Age, Cycling with Children to School, Bike Parking for Events) | Advocacy Campaigns (Oxford Street East Cycleway, Safe-Street Neighbourhoods, Eastern Sydney Regional Bike Network, Get NSW Active funding, Advocacy Resources) | Become a member | About/Contact. Search box.
- **News:** homepage "Latest news" blog cards (thumb, headline, excerpt), 26 pages deep; dates not shown on cards; latest ~Nov 2025. "Follow us on Facebook" (no embed, no newsletter).
- **Advocacy:** campaign pages are thin — Oxford St East page = blockquote ask + "SIGN THE PETITION at oxfordstreet.bike" + one map image + 3 links to Bicycle NSW articles + tag list. No status/timeline. **Submissions page** (/what-we-do/submissions/): grouped **year > recipient council** (2025: Centennial Parklands 1, Bayside 4, Randwick 3, Waverley 3, NSW 2; 2024: 12), entries "Title (Mon)" linking Google Docs — 25 total. Good lightweight pattern.
- **Rides:** /what-we-do/rides/ — listed as "Route (32km) - (regular pace) - led by Name"; Mon/Wed/Fri regular, Sat fast "SupaSaturday", monthly Sunday "Cruisy Coastal"; RSVP via **Meetup**. Monthly meeting first Tuesday (Meetup).
- **Membership:** page; Gold/Lifetime member honour roll.
- **Good:** council-grouped submissions; programs (CWA, bike valet) as service offerings; partner logos (Better Streets, Bicycle NSW).
- **Bad:** campaign pages lack status/timeline; news undated on cards; no newsletter.

### Bike North (Northern Sydney, 500+ members, largest NSW BUG) — https://bikenorth.org.au/  (403s fetch bots; got via curl with browser UA)
- **Platform:** **ClubExpress** (ASP.NET club-management SaaS: /content.aspx?page_id=…&module_id=…, celinks.ashx). Launched Mar 2024 ("Our fresh new approach to supporting members").
- **Nav:** Calendar | Our rides (Join your first ride, Calls & Signals, Routes, Levels of difficulty, Our Ride Leaders, Build your skills, RidewithGPS, Cycling Without Age, Gravel & MTB) | Tours and events (Big Ride Days, Tour de Cowra, Nowra, Autumn Classic Canberra, touring) | Advocacy (Take action!, Advocacy submissions, Local Govt Elections 2024) | About us (history, awards, News & Articles, Chain Reaction, annual reports, kit, contact) | Join Us! | Login. Accessibility bar (print, text size).
- **News:** "News" list with "Published On" dates (latest 10/8/2026 "Is your helmet protecting you?"; mostly volunteer awards, kit, skills); **"Chain Reaction" weekly e-newsletter archive** (every Wednesday; 7 Oct 2026 latest) — the real news channel, browsable publicly.
- **Advocacy page:** mission + 4 focus bullets + **"Meet our advocates": accordion per LGA (The Hills, Ku-ring-gai, Parramatta, Hornsby, Lane Cove, Ryde, Hunters Hill, North Sydney, Willoughby)** each with a 2–4 sentence state-of-play ("Hornsby Shire has introduced regular consultations… completion of the Epping to Pennant Hills cycleway…"), convenor name, photo with councillor/MP, advocacy@ email. Submissions page = prose + one link to a folder of PDFs. "Take action!" = how-to guide (ride, write a letter with 7 tips, respond to consultations, media). Candidate questionnaire at elections.
- **Rides:** ClubExpress calendar grid with **colour-coded categories = grade (Easy / Easy-Medium / Medium / Medium-Hard / Hard) plus Advocacy, Meeting, Skills & Safety, Social, Interest Group, Non-Bike-North event**; ~40+ rides/month; FULL/Waitlist/CANCELED states shown; register per event. **Levels of difficulty** page: 5 grades each with distance, terrain, regroup interval, duration, avg speed; pace scale slow<15 … fast>25 km/h; Ride Difficulty Index formula. **Routes library**: 566 routes, searchable by city, distance, ascent, effort index; each with overview, suitability, regroup points, bail-outs, coffee stop, phone reception.
- **Membership:** Individual $45/yr ($130/3yr), Family $65, Concession $35; **3-month free Trial membership** to ride first; explicit "membership does not include insurance — get Bicycle NSW (discount) or AusCycling".
- **About:** history page with full committee table 1996–2026 (initials by role), awards, annual reports.
- **Good:** per-LGA advocacy accordion with named convenor; ride grading system; trial membership; weekly newsletter archive.
- **Bad:** SaaS URLs are ugly and un-crawlable; advocacy issues not tracked per project; submissions dumped in a folder.

### BIKESydney (City of Sydney) — bikesydney.org
- **Status: DEAD.** Domain now serves "AU CasinoGuide" affiliate content (search engines still index old pages: "Our History", "Issues Reporting App" = their former **Go! Fix** issue-logging app with council access). No current web presence found; no Facebook found. Cautionary tale for domain lapse.

### CAMWEST (Parramatta / Blacktown / Penrith / Hawkesbury / Cumberland) — https://camwest.org.au/  ***(best low-tech issue register)***
- **Platform:** hand-built static HTML (+ contact.php), slideshow, hamburger menu. Founded 1987.
- **Nav:** Home | Rides | News | Resources | Advocacy | Map | About | Contact.
- **News:** single "Advocacy Actions" post, "Updated on 02/01/2026" with author first name; essentially a pointer page.
- **Advocacy page (/advocacy.html):** issues grouped under **council headings (Cumberland, Parramatta, Blacktown, Penrith, Hawkesbury, Other, Greater Sydney corridors)**, each council with an "At a glance" link list. **Per-issue block:** H4 title ("Cumberland Strategic Cycleway Corridor 16 – Lidcombe to Guildford") + **map-marker icon deep-linking to their map at coordinates/popup** (`map.html#map=13/-33.80112/150.95653…`, sometimes "Show Section to Upgrade on Map") + labelled lines: **Overview** (project + CAMWEST position), **Project Documentation** (council/TfNSW page), **Feedback from CAMWEST/Bicycle NSW** (submission PDFs), **Post-exhibition Report** (council determination, page refs), **Final Version**, and **"Updated: Sep 2026"** or "Original: Feb 2023. Last Update: Aug 2023." No explicit status field (inferred from prose). Latest updates Sep 2026.
- **Map (/map.html):** own Leaflet/OSM multi-layer map (OSM / OSM-Cycle base layers), layer control with per-layer legends, "centre popup", "create URL of current view", usage notes.
- **Rides:** link to Bicycle NSW Buncheur calendar filtered to CAMWEST; self-guided routes in Ride With GPS club collection with surface/traffic colour coding.
- **Membership:** $10/yr, online form or printable, EFT; benefits: RWGPS club account, 15% off Bicycle NSW, members email list.
- **About:** committee as role: name bullets (2025–26), ABN, incorporation number, constitution PDF, history.
- **Resources:** categorised link list: OSM Cycle/CyclOSM, topo map, RMS Cycleway Finder ("guide not gospel"), heatmaps, Bike Spot, Snap Send Solve, Magpie Alert, trackwork pages, bike library, other BUGs (incl. Ride Blue Mountains, Liverpool BUG, WSCN).
- **Good:** council-grouped issue register with doc links + own map deep links + update stamps — exactly the per-issue format wanted, done in static HTML.
- **Bad:** dated look; no status chip; no photos; news page near-empty.

### Inner West Bicycle Coalition (Ashfield BUG + Bike Leichhardt + Bike Marrickville) — https://iwbc.org.au/
- **Platform:** WordPress (/index.php/ permalinks, default-ish theme), comments open.
- **Nav:** huge flat menu of per-issue pages: Current issues (Tempe/Sydenham–St Peters, Advocacy Summaries, White Bay, Current Council Bike Projects) | Lilyfield Road Cycleway | Pyrmont Bridge Road | Rozelle Parklands | Labor policy | Parramatta Rd | Cooks River | Bicycle Working Group | Better Streets 30 km/h | Petition to the Mayor | Cycling in Ashfield …
- **News:** dated posts Nov 2016 – Oct 2025 (latest "Callan Park Plan of Management – Bicycle Boulevard"); categories Current issues / Road Safety / Speed limits.
- **Advocacy:** per-issue pages (prose); **"Current Council Bike Projects"** = prose status report (counts as of Dec 2024, email to council engineering manager, dated updates Dec 2025 & May 2026: "Lilyfield Rd approved for detailed design… construction likely 27/28"; "IWBC not completely happy about… path width"); "Works for Bikes" quarterly meetings with council engineers; Advocacy Summaries index -> Google Drive folder. Petition page. No maps, no wins page.
- **Rides/membership:** via the three member BUGs; no online join. Contacts: named advocacy coordinator + webmaster.
- **Bike Leichhardt** (bikeleichhardt.nfshost.com) = empty WordPress 2025 default; Ashfield BUG = Meetup page.
- **Good:** project-by-project council pipeline commentary with stage/funding; coalition model.
- **Bad:** sprawling nav, dated content, no structure.

### BayBUG (Canada Bay) — no own site found (baybug.org.au NXDOMAIN); listing at https://bicyclensw.org.au/network/bug/canadabay/ (prose only). Formed 2001, inc. 2004; weekend rides.

### Bike South West (Canterbury-Bankstown / Georges River) — https://bikesouthwest.org.au/
- WordPress (CyberChimps theme, SlideDeck). Nav: Home | Rides | Advocacy | Membership | Meetings | Links + Facebook group. Rides link to Bicycle NSW calendar; "Upcoming Rides" slider; 15% Bicycle NSW discount. Last touched ~2023. Minimal.

### Newcastle Cycleways Movement (est. 1977) — https://www.newcastlecycleways.org.au/
- **Platform:** Wix (blog, events, forms, member login, shop).
- **Nav:** Home | Our Purpose | Events/Rides (Monthly Meet) | Campaigns (Map the Gaps, CycleSafe Network, Successes) | Bike Buses (Adamstown, register) | Membership (free; Suburb Matter Experts; Bicycle NSW) | Way-Finding (See the City, Art Tours, OpenStreetMap) | Council Works (Small Projects Suggestions, Projects Suggestions) | Shop | Socials | Groups.
- **News:** Wix blog, dated (latest Sep 15 2026), filter "Cycling Advocacy"; topics: 40 km/h Curzon Rd, #Love30, "Lock It In" station parking (with TfNSW response), Link Road Forest rezoning, cycling plan mid-point survey, Local Streets Plan 2026, by-election candidate Q&A, works updates (Maud St crossing, Chinchen St, Glebe Rd signals), e-scooter inquiry.
- **Advocacy features:**
  - **Map the Gaps**: crowd-rated map of the councils' official regional routes R1–R6, colour legend RED (low-confidence riders won't use) / ORANGE / YELLOW (e.g. unsignalised crossing) / GREEN / PURPLE (not yet assessed or closed); ask = "complete the network, red first".
  - **Council Works**: links to CoN / LMCC project pages & Have Your Say + **four live Overpass-Turbo maps** (Newcastle/Lake Mac × under-construction/proposed) built from OSM tags (credit Australian Cycleway Stats).
  - **Small Projects Suggestions**: maps per council with layers "current top 10", backlog by works type (crossings, painting, ramps), **completed works**; member-input mechanism "coming".
  - **Projects Suggestions**: larger-project idea maps (draft).
  - **Successes** page: 3 entries (Fernleigh Track with diagram PDF + Google Maps link + photo; Glendale–Wallsend tramway; CycleSafe Network) — thin.
  - **CycleSafe Network**: $100M/160 km pitch with exec summary + full report PDFs.
  - **Suburb Matter Experts**: sign-up form "which suburbs do you know well for cycling/walking?" — distributed local eyes.
- **Rides:** Wix Events cards (banner, countdown "6 days to the event", "Sat, 17 Oct", meeting point, description, RSVP -> Meetup); "Meeting on the Move" = ride + meeting hybrid; Bike Buses with registration.
- **Membership:** free sign-up form (email opt-in); "Our Team" with three named officers + bios.
- **Good:** Map the Gaps rating scheme; OSM-driven live works maps; SME volunteer model; bike buses.
- **Bad:** many maps "DRAFT"; successes page undated; Wix.

### Illawarra Bicycle Users Group (IBUG, Wollongong/Shellharbour/Kiama) — https://ibug.org.au/
- **Platform:** Squarespace (+ shop for membership).
- **Nav:** Home | About | Benefactors | Collaborators | Women's Cycling | Maps & Rides | Events | Submissions | Updates | Join Us | Shop | Contact.
- **News:** /updates — thumbnail + "IBUG Website · 1/9/26" + title; latest 1 Sep 2026 (regional transport plan, Austroads Part 6A, Lake Illawarra loop, school bike skills).
- **Advocacy:** three goals (Represent & Advocate / Increase Cycling / Improve Infrastructure); Strategic Plan (Google Drive); **Submissions** = single reverse-chronological list "DD/MM/YYYY – title – one-line position" (27 entries; e.g. "24/1/24 Hazardous non-compliant bollard Bellambi Point", "09/06/2026 Letter to Hon. Paul Scully…"). No outcomes field.
- **Programs:** Bicycle Buddies mentor program; Festival of Cycling; cost-of-living conference (Humanitix).
- **Membership:** via shop; "Become a Benefactor"; Collaborators page for partner orgs.
- **Good:** benefactor/collaborator framing; dated submissions with positions.
- **Bad:** no per-issue pages; events empty.

### Central Coast BUG (CCBUG) — https://ccbug.org.au/
- Wix. Nav: Home | Rides (Calendar, Community & Charity Events, Rides Grading, Ride Requirements, Rides Comparison, Ride Documents) | RidesAssist (tandems for vision-impaired) | Membership (PayPal/bank; renewal; recommended suppliers) | Cycling Kits | Advocacy (Submissions) | About (Our People, Gallery, Social Media) | Contact. Recreation-first; no news feed (photo galleries); advocacy = submissions page only. Strava club.

### Northern Beaches — no BUG site found. Active-transport advocacy there is **Better Streets Northern Beaches** (betterstreets.org.au/better-streets-northernbeaches: mission "Palm Beach to Manly", council asks e.g. 30 km/h, spokesperson contact, Facebook).

### Wagga Wagga — no community BUG site; only CSU campus BUG (email list). Council Active Travel Plan on Have Your Say.

### Blue Mountains — "Ride Blue Mountains" is listed as an affiliated BUG by Bicycle NSW (June 2026 Great Blue Mountains Trail submission) and linked from CAMWEST resources, but no website surfaced; assume Facebook-only.

### Other NSW BUGs seen only via Bicycle NSW showcase posts (no sites found): Orange BUG, Shoalhaven BUG (25 yrs), Coffs BUG, DUBBUG (Dorrigo-Urunga-Bellingen), KBUG Narooma, St George BUG, Sutherland, Liverpool BUG, Western Sydney Cycling Network (westernsydneycyclingnetwork.com.au — rides + bike recycling, Cycling Without Age chapter, council-supported clubhouse).

---

## 3. Victoria

### Port Phillip BUG — https://www.ppbug.org/
- **Platform:** Squarespace. Nav: Home | Advocacy | Current campaign | Calendar | Contact | BUG BLOG | JOIN now.
- **News:** BUG Blog = dated posts, author, category, tags; latest 4 Aug 2026 (Ripponlea streetscape response), Apr 2026 state election, Jan 2026 Anzac Station–Sandringham SCC, Nov 2025 Fishermans Bend ITP, Aug 2025 e-bikes on PT. Social links (FB, IG, Mastodon), mailing list for ride details.
- **Advocacy page:** prose; **points to an external Google Sheet "big list" of advocacy issues**; submissions as bulleted Google Drive links with body + date in title; captioned photos of small wins ("this cut-through on Williams St lets cyclists access a quiet back street"); **councillor rides** (ride each ward with its councillors to show problems) linked to blog posts; reporting section -> council/VicRoads/SnapSendSolve. Council logo acknowledging support.
- **Rides:** leisurely social rides; details by mailing list; calendar page (embed not visible). Meetings 1st Tuesday Ecocentre.
- **Membership:** Join Now -> email; incorporated (A0061991K); container-deposit donation ID.
- **Good:** councillor ward rides; issue "big list" (even if a sheet); dated submissions.
- **Bad:** issues list off-site; no status.

### Boroondara BUG — https://boroondarabug.org/
- **Platform:** WordPress; CC BY-SA content licence.
- **Nav:** News | Our Campaigns | Rider information | Around the world | About (incl. Minutes, What we have achieved) | Join us | Greenways in Boroondara.
- **News:** dated posts (latest 28 Jul 2026 Vic election); tag cloud; FB/X/IG links; no newsletter.
- **Our Campaigns:** cards (image, heading, one-liner, Read More) + embedded **interactive map "cycling opportunities and hotspots"** (purple lines = planned bike paths, blue pins = hotspots). 9 campaign pages: Hawthorn–Box Hill trail, Riding to school, Toorak Rd Bridge, Frog Hollow–Ferndale, Kew Railway Trail, Uplifting existing network, Bike Strategy, Hotspots, What we have achieved.
- **Campaign page format (Toorak Road Bridge):** intro -> benefits bullets -> **usage data** (counter: ~450 bikes/day) -> **History timeline** (2008 strategy recommends; 2014 feasibility; 2014–15 consultation of 78 properties; Oct 2016 state fund; 14 May 2018 council approves — **motion quoted**; stalled; May 2021 planning funds; May 2022 $8M election promise; Dec 2024 ATV proceeds with inferior route) -> references (council doc, committee minutes) -> concept drawings. Hawthorn–Box Hill adds "Current status" heading, "Quotes from supporters" + statement-of-support form, links to feasibility study and community campaign site.
- **What we have achieved:** entries = bold title + 1–2 sentence why/what we did + photo (no dates) e.g. "Darebin Creek Trail bridge… took 25 years to build!".
- **Rider info:** FAQ, trip planning, **See a problem?** (council "Report an issue" link, VicRoads 131 170, SnapSendSolve — no own form), TravelSmart map, kids, e-bikes, bike setup.
- **Rides:** "Find a Ride" page only. **Join:** "help campaign" (no fees shown). Minutes published.
- **Good:** campaign page timeline + quoted council motion + usage data; hotspots map; achievements page; published minutes.
- **Bad:** wins undated; duplicate /wordpress/ URLs; no calendar.

### Darebin BUG (160 members) — https://darebinbug.org.au/wp/
- WordPress (Pique theme). Nav: About Us | Rides | Campaigns | Meetings | Join | Help Us | Contact | BUG News. News dated (latest 7 Oct 2026 AGM notice). **Campaigns** = prose list of past involvement (Tyler St contra-flow lane, solar bike counter partnership) — "now mainly organises rides". **Rides page**: Saturday (9:30, 30 km, 12 km/h, beginners) and midweek Tue/Thu (labelled list: Start / Distance / Finish / Surface / Speed / Refreshments / Safety; leader + tail; "leave no one behind"), heat policy (30/35°C), **embedded Google Calendar + quarterly PDF ride lists**. Join: PDF form; $20/$40 family/$15 conc; 3-year option. Good: ride page clarity, weather policy. Bad: advocacy dormant.

### Merri-bek BUG (ex-Moreland; formed 2006 from BrunsBUG + CoBUG) — https://morelandbug.org/
- WordPress ("Spring" theme). Nav: Campaigns | Committee 2025 | Candidate Surveys | Membership | Contact us | Newsletter. Blog archive ends Nov 2022; constitution 2025. **Campaigns page**: stacked sections (title often = location e.g. "Cumberland Road, Pascoe Vale"; description; links "Read what you can do NOW", submission PDFs, VCAT decision; "Report a problem to Merri-bek City Council" link; placeholders "Available shortly"). Topics: e-bikes on trains ban, Sydney Rd protected lanes + accessible tram stops, Bunnings Glenlyon Rd. Rides: every 2nd Wednesday from Moreland station (what to bring list); Google Calendar. Meetings 4th Wednesday Coburg RSL. Join = subscribe to discussion list. Newsletter signup (email + postcode). Committee page = roles + names, elected date. CC BY-NC licence. Council "membership activity grant" credited. Bad: stale blog, no dates on campaigns.

### Yarra BUG — https://www.yarrabug.org/
- WordPress (Anders Norén theme). Nav: Home | About | Take action (Yarra for safer streets; Elizabeth Street history Parts 1–3; Coppin Street corridor; 4 petition-feedback-by-suburb pages) | Resources (Getting About; Bike shops) | YarraBUG Radio (3CR, RSS) | Contact (Subscribe).
- **News:** dated posts with sticky posts, latest 28 Sep 2026 (Gimme 5! forum, Lime scheme ended, Gipps St ramp open, Elizabeth St downgraded). Social: Bluesky, X, FB, IG, Mastodon, Threads.
- **Elizabeth Street history pages** = exhaustive dated chronology (Part 3: 26 Nov 2024 -> 24 May 2026) with table of contents of anchor links; each entry "DD Month YYYY: Source/Title" linking agenda/minutes PDFs, **council resolutions quoted in full**, cross-section diagrams, media articles, "return to top" links. 169k characters.
- **Yarra for safer streets** campaign hub: status line ("lanes remain under threat", council vote 12 Aug 2025), email-the-ministers templates + leaflet, FOI releases, petition count (1,100+) with resident quotes by suburb, numbered 1–10 action list, events/council meeting timeline, "what else is under threat", resources/share.
- No rides, no membership page, no map; radio show is distinctive.
- **Good:** forensic timeline with primary sources; petition feedback by suburb. **Bad:** text walls; status buried.

### Whittlesea BUG (est. 2010) — https://www.wbug.org.au/
- WordPress. Nav: Key Documents (Values, Policies, Committee minutes) | News | Rides (Upcoming, Rides Library) | Advocacy (Infrastructure Campaigns, Cycling Safety Campaign, Snap Send Solve) | Membership (Individual, Families) | Merchandise | Sponsors | Links | Gallery | Contact. News cards (Biketober 2026, Spin for the Kids, 5% campaign); page dated 22 Sep 2026. **Infrastructure Campaigns**: per campaign heading + status note ("Currently under construction!!") + sub-sections per path segment with **Path description / Time frame (short-medium-long) / Governing body (Council, VicRoads, Melbourne Water)**; "Successful campaigns" list with outcome + photo. Rides via Team App + Facebook; categories (Sunday paths, Saturday fast, Wed afternoon, monthly women's, rail trail trips). Membership benefits list (bottle, discounts, lawyers). Service area map. Good: governing-body/time-frame fields; committee minutes public.

### Banyule BUG (Heidelberg) — https://banyulebug.org.au/
- WordPress. Nav: Home | About | Rides | Join Us | News | Info | Contact. **Weekly "What's On" Mon–Sun grid** with per ride: name, time, distance, suburbs, leader + phone, Strava map + Google Map links. Social club (over-50s, no grading), "Be Seen Be Safe" tips. No advocacy section. Good: the weekly grid.

### Whitehorse Cyclists (Box Hill, 250+ members) — https://whitehorsecyclists.org.au/
- WordPress (2021 rebuild via council grant). Rides split members/non-members calendars, RideWithGPS club, 3 distance/pace bands, "up to 14 rides a week", "Try before you join" (3 rides). Newsletter, safety & ride practices, forms/reports, documents, members login. Advocacy one line. Rec club pattern.

### Bike Bendigo — http://www.bikebendigo.com/ (bikebendigo.org.au gone)
- WordPress (Studio Ink). Nav: Home | About | Guide to riding on roads | Maps (4 suburb route pages) | Contact. One post (17 Mar 2026 videos). No advocacy/rides/membership on site; activity is Facebook/events (Bike Palooza, Biketober).

### Geelong / Ballarat — no BUG websites. "Bicycle Users Geelong" domain dead; Bike Geelong (Ashley Goldstraw) is Facebook + YouTube "Bike Route Buddy" (weekly videos reviewing dangerous intersections — a content idea). Ballarat BUG exists (spokesperson quoted in press) but no site. Better Streets Geelong / Ballarat chapters exist on betterstreets.org.au.

### Others (directory-only): MooneeBUG (Moonee Valley), BayWest BUG / Hobsons Bay BUG, Nillumbik BUG, Manningham BUG, Melbourne BUG (Google Group) — council community-directory listings, no sites.

### Streets Alive Yarra (not a BUG; strong model) — https://streets-alive-yarra.org/
- WordPress. Nav: About (Vision, Impact, Supporters, Journal, Submissions, Newsletter, Donate) | Designs (Concepts, Neighbourhoods, Networks, Schools, shopping/residential streets, parks…) | Actions (Expenditure, Revenue, Budget, Transport Strategy) | Benefits (by audience: children, seniors, disability, drivers, business, trees, health). Journal dated (10 Oct 2026). **Impact page**: wins as bullets grouped Local / State / Federal with links; "100+ submissions"; media coverage list with thumbnails + dates. Good: "designs" library of concept treatments per street type; benefits-by-audience framing.

---

## 4. Tasmania
- **Bicycle Network Tasmania**: no separate site; see Bicycle Network above (TAS filter; campaigns Battery Point, Collins St, rail trails, council elections 2026; Hobart office).
- **Tamar Bicycle Users Group (Launceston)** — https://www.tamarbug.org.au/ (events on tbug.org.au): WordPress; nav Home | What we do (Rides & Events Calendar) | About us | Join us (membership $20, benefits, starting to cycle) | Contact. Ride types (Wed countryside, Thu evening city trails), links to Bicycle Network RWGPS rides, bike registration, e-bike advice; newsletter "coming soon"; partner logos (Bicycle Network, City of Launceston). Advocacy = one paragraph inviting ideas.
- **Hobart**: no BUG. Cycling South (cyclingsouth.org) is a councils' regional body; Streets People Love Hobart (new, Collins St trial supporter).

## 5. South Australia (besides Bike Adelaide)
- **Port Adelaide BUG** — https://portadbug.org/ (WordPress.com): Home | BUG Blog | PA/E Bike Planning | Port Cycleways | Stay Safe Ride Safe | Links & Resources; project list (Outer Harbour Greenway, Hart St, Port River Expressway, Gawler Greenway, Rosewater Loop), "What we've achieved!" page, Active Transport Manifesto, defensive-riding/SA law pages; meetings 1st Thursday; no membership. Dated 2019–2024 content.
- **Unley BUG** — https://www.unleybug.org/ (WordPress; old Wix at unleybug1.wixsite.com/ubug): Home | About | Contact | Posts | Advocacy | Cyclists of Unley | Merch. News = monthly newsletters as posts (latest 18 Sep 2026); weekly Tuesday ride + monthly Saturday; self-guided tour PDFs; "Cyclists of Unley" people profiles. Advocacy page thin.
- All other SA BUGs are Facebook groups (see Bike Adelaide directory).

## 6. Western Australia (besides WestCycle)
- No suburban BUG websites found. GO BUG (Gosnells) = Saturday ride, Facebook; Fremantle BUG = Facebook group; Cockburn BUG attempted 2017.

## 7. NT — nothing beyond Bicycle Network's Darwin Bike Plan work and DORC (MTB club).

## 8. National umbrella patterns worth noting
- **Better Streets** (betterstreets.org.au): coalition; /local-groups = bulleted list of chapter pages ("Better Streets <place>"); apply-for-a-page form; campaigning handbook PDF. Chapter page = mission sentence + council asks + spokesperson + Facebook.
- **Ride On magazine "Wheel Power"**: what makes BUGs effective — inclusive, active (ride photos as advocacy evidence), nurturing, dependable; "reasonable, factual, reliable" with councils.

---

## 9. Feature-by-feature comparison (who does it best)

| Feature | Best example(s) | Notes |
|---|---|---|
| Per-issue register w/ status + map | Pedal Power electorate tracker; CAMWEST advocacy page | PP: JSON {id,title,status,period,summary,link,social,location,pins}; CAMWEST: council-grouped blocks with Overview/Project Docs/Our feedback/Post-exhibition report/Updated: |
| Campaign page w/ dated timeline | Bicycle Network (Battery Point "Campaign status"), Bicycle NSW (Oxford St "Project status"), Boroondara (Toorak Rd), Yarra BUG | reverse-chron dated entries linking primary docs; quote council motions |
| Wins page | Pedal Power (73, electorate filter), Boroondara (title+why+photo), Whittlesea (outcome+photo), Streets Alive Yarra (grouped by govt level) | add dates — everyone forgets |
| Submissions library | Bicycle NSW (year groups, "and the Response"), BIKEast (year>council), Pedal Power (year counts, expandable) | always include recipient + month + PDF; link response |
| Issue/hotspot map | Boroondara (purple planned lines + blue hotspot pins), Newcastle Map the Gaps (red/orange/yellow/green rating of official routes), Pedal Power live map | |
| Live "what council is building" | Newcastle Overpass-Turbo maps of OSM construction/proposed tags | zero-maintenance if OSM is kept current |
| Report a hazard | WestCycle guide + escalation; Bike Adelaide; Boroondara "See a problem?" | signpost to council form/SSS; offer to escalate |
| Council plan links | CAMWEST per-project; IWBC "Current Council Bike Projects"; Newcastle Council Works | |
| Rides calendar & grading | Bike North (ClubExpress colour grades, 566-route library, RDI); Banyule weekly grid; Darebin labelled ride spec + Google Calendar | |
| Membership flow | Bike North (tiers, 3-yr, trial, insurance disclaimer); Pedal Power (monthly pricing) | |
| Committee/about | CAMWEST (role: name, ABN, inc no., constitution); Bike North history table; Merri-bek committee page | |
| Newsletter archive | Bike North Chain Reaction (weekly, public); Unley (newsletters as posts) | |
| Local-eyes volunteers | Newcastle "Suburb Matter Experts"; Bike North per-LGA convenor accordion; Pedal Power electorate teams | |
| Councillor engagement | Port Phillip councillor ward rides; Bike North photos with MPs/councillors | |
| Election tools | Bike North candidate questionnaires; Merri-bek candidate surveys; Pedal Power MLA mailto forms; Bicycle Network SCC address lookup | |

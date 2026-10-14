# Queensland BUG / cycling-advocacy website survey

Researched 11 October 2026 for the Ipswich BUG site rebuild. Method: WebSearch + WebFetch + curl platform fingerprinting. Facebook pages/groups cannot be fetched, so "Facebook-only" groups are recorded from the Bicycle Queensland directory and secondary sources.

## 0. The master directory: Bicycle Queensland "Bicycle User Groups"

- **URL:** https://bq.org.au/advocacy/bicycle-user-groups/ (the old Qld Gov page https://www.qld.gov.au/transport/public/bicycle-riding/where-to-ride/ride-with-a-group now 301-redirects here)
- This is the only official "find a BUG" page in Queensland. 23 groups, grouped Brisbane / South East Queensland / Western-Central-Northern. Each entry = location, contact name, phone, email, website/Facebook links. No form; "email us" to be added or corrected.
- **Ipswich BUG is NOT listed.** Logan, Gold Coast, Toowoomba, Beaudesert, Caboolture, Bribie, Sunshine Coast are. Action item: email info@bq.org.au to get Ipswich BUG added with the new URL.
- Data quality is poor (stale links, three entries where displayed email differs from the mailto link, dead domains for CBD, EaST, West, Mackay, Capricorn Coast, Townsville).
- Also useful: BQ Advocacy landing https://bq.org.au/advocacy/ ; position statements https://bq.org.au/advocacy-statement/ (demerit points, 30 km/h, presumed liability, helmets, heavy vehicles, e-bikes, MTB in national parks); one campaign card ("Logan Faster Rail: reinstate the active transport corridor").

Full directory as scraped (name - area - contact - email - web):

| # | Group | Area | Contact / email | Web presence |
|---|---|---|---|---|
| 1 | Airport BUG | Nundah | Mitch Bright, airportbug@gmail.com | Google Sites (login-walled now), Facebook |
| 2 | CBD BUG | Brisbane CBD | Paul French, brisbanecbdbug@gmail.com | facebook.com/cbdbug, twitter.com/cbdbug (cbdbug.org.au domain is dead) |
| 3 | East (EaST) BUG | Brisbane east | Belinda Ward, eastbuginc@gmail.com | facebook.com/EaSTBUGInc (eastbug.org.au dead) |
| 4 | Brisbane North BUG | Brisbane north | Stephen Wisenthal, convenorsnorthbug@gmail.com | brisbanenorthbug.com, facebook.com/BrisbaneNorthBUG |
| 5 | Brisbane West BUG | Brisbane west | Chris Cox, brisbanewestbug@gmail.com | facebook.com/brisbanewestbug (westbug.org.au dead) |
| 6 | Sisters of the Saddle | Brisbane (women) | admin@sistersofthesaddle.com | sistersofthesaddle.com |
| 7 | Brisbane South BUG | Brisbane south | Mary Doolan et al., cycling.brisbanesouthbug@gmail.com | facebook.com/BrisbaneSouthBUG |
| 8 | Beaudesert BUG | Beaudesert | Michael Enright | none |
| 9 | Get Around Caboolture | Caboolture | Wendy Nash, connect@getaroundcaboolture.au | getaroundcaboolture.au |
| 10 | Logan BUG | Logan | Rob van Manen, logan.bug10@gmail.com | facebook.com/groups/loganbug |
| 11 | Sunshine Coast BUG | Sunshine Coast | Craig Humphrey | scbug.org (directory still points at old scbtc.net/scbug) |
| 12 | Bribie BUG | Bribie Island | bribiebug@yahoo.com.au | sites.google.com/site/bribiebug/ |
| 13 | Gold Coast BUG | Gold Coast | Stuart Brogan, gcbug@myyahoo.com | facebook.com/groups/6585606254783433 |
| 14 | Toowoomba BUG (TRBUG) | Toowoomba | secretary@trbug.org.au | trbug.org.au (Google Sites) |
| 15 | Bundaberg BUG (Mad Cycologists) | Bundaberg | madcycologists@gmail.com | madcycologists.org.au (Wix, domain error - dead) |
| 16 | Cycle For Life Rockhampton | Rockhampton | peter@kane.id.au | cycle4liferockhampton.com (Google Sites) |
| 17 | CQ Spin Sisters | Rockhampton | - | Facebook group |
| 18 | Cairns BUG | Cairns | Brynn Matthews, cairnsbug@gmail.com | facebook.com/cairnsbug |
| 19 | Fraser Coast BUG | Hervey Bay | bicycleusersgroup@yahoo.com.au | fcbug.org.au |
| 20 | Mackay BUG | Mackay | - | bicyclemackay.org.au dead; facebook.com/bicyclemackay |
| 21 | Capricorn Coast BUG | Yeppoon | capcoastbug@gmail.com | capcoastbug.com.au dead; Facebook group |
| 22 | Innisfail BUG Inc | Innisfail | chrishead@hotmail.com | innisfailbug.wordpress.com |
| 23 | Townsville BUG | Townsville | townsvillebug@gmail.com | townsvillebug.com is now a hijacked casino spam site (lapsed domain) |

Not in the directory but found: Space4Cycling Brisbane (space4cyclingbne.com), Ipswich BUG (ipswich-bug.org), Redlands Coast Active Travel Reference Group (council-run, no site), Bundaberg Regional Cycling Reference Group (council-run). No "West End BUG", "Bayside BUG", "Redlands BUG", "Moreton Bay BUG" or "Townsville/Cairns website" exists; West End is covered by CBD/South BUGs, Bayside by EaST BUG, Moreton Bay by Get Around Caboolture + Bribie BUG, Redlands by the council reference group.

Lesson from the directory alone: roughly a third of QLD BUG domains have lapsed. A static site with a cheap long-life domain and no CMS to rot is the right call. Put the BQ directory on a calendar reminder to keep the Ipswich entry current.

---

## 1. Brisbane North BUG - the best model in Queensland

- **URL:** https://brisbanenorthbug.com/
- **Platform:** WordPress 7.1 (self-hosted), Photocrati theme, Elementor; AddToAny share bar; WP events plugin for Events.
- **Top nav:** Home | Events | Campaigns (Samford Rail Trail; Safety Measures on Nudgee Rd; All the Way to EJ > Safe Streets for All?, NBB to Kedron Brook Link) | News Room | The Archive | Newsletters | Campaign Shop | Advocacy Hub | About Us
- **News:** dated blog posts on the home page (card: thumbnail, title, date, Read More). Latest 18 Sep 2026; cadence roughly monthly in 2026 (Sep, Aug x2, May x2, Mar x2), with a gap Feb 2025 to Mar 2026. Newsletter is a web page ("Newsletter - Summer 2026 Issue 1", 2 Oct 2026, ~550 words, 5 sections: intro, "The Journey So Far", "Why Dickson Street Matters", "Our Vision", "Take Action Today"), not an email platform.
- **Advocacy / issues - three distinct structures, all worth copying:**
  1. **Infrastructure Projects index** https://brisbanenorthbug.com/infrastructure-projects/ - grouped by corridor (North Brisbane Bikeway stages 1A to 4; Kedron Brook/Jim Soorley Bikeway sub-sections; standalone projects). **Status is embedded in the page title in parentheses**, e.g. "Bridge Street/Dickson Street from Rigby Street to Price Street (Stage 4: Subject To Funding - No Known Completion Date)", "Gateway North Upgrade Project (Completed March 2019)", "Somerset Street to Mawarra Street (Stage 2: Under Tender Design Phase With Late 2018 Completion)". Labels used: Completed (month/year), Under Construction, Under Tender, Under Tender Design Phase, Detailed Planning/Under Consultation, Subject To Funding, Project Status Unknown, Future Stages, Completion Date TBC. Weakness: labels are free text, many dates have passed, and most pages were last updated 2016 to 2019 - the status rots because it is hand-edited prose.
  2. **Per-issue "Request for Action" page** - the standout example: https://brisbanenorthbug.com/infrastructure-projects/bridge-stdickson-street-immediate-safety-concerns-request-for-action/ . Format: location (street, intersections named) > problem description with evidence (photo, YouTube video of cars cutting the bike lane, QAS tweet about a crash, 1 Sep 2015) > numbered asks (40 km/h, raised kerbs, reconfigure lane, bring forward NBB stage 4, design Price St to Kedron Brook link) > **dated correspondence log**: 2 Sep 2015 letter to Lord Mayor (PDF), 9 Sep officer call, 28 Sep response (PDF, ref LM04695-2015, quoted: "Council was unable to support the proposal of reducing the speed limit..."), 6 Jan 2016 second letter + 2 attachments (PDF), 9 Feb 2016 second response (PDF, quoted), "last updated 12 Feb 2016". Plus links to the e-petition, City Plan 2014 road hierarchy. Missing: a map, an explicit status badge, and any update after 2016.
  3. **Campaign pages** (Samford Rail Trail 30 Aug 2024; Nudgee Rd 22 May 2023; Barrambin/Victoria Park 18 Sep 2026): problem > ask > named decision-makers with email links (TMR cycling program, local councillor, Minister) > "submit by [deadline]" link. Barrambin post is a model "how to write a submission" post: cites TMR Priority Route Maps, TMR cycle track design guideline (Jul 2025), Austroads Part 6A, BCC bikeway counts; gives a concrete recommendation (4 m bi-directional separated bikeway Roma St to Mann St); links Have Your Say; deadline 27 Sep 2026.
  - "Current Petitions - for your signature" page: title, one-line ask, link (both links point to the same pid - sloppy).
  - "Meeting with Cr Adam Allan - Northgate Ward" (5 Feb 2025): short meeting write-up with 4 photos. Thin - no commitments or follow-ups logged.
  - "Activity Map" and "Venue Dashboard / Submit Venue Form" pages exist in The Archive but the map did not render; appears to be a venue/location plugin, not an issues map.
- **Rides calendar:** Events page lists only monthly meetings (29 Oct 2026 and 26 Nov 2026, 6:30 to 8:30 pm, 69 Blackmore St Windsor). No rides.
- **Membership:** free; email membership@brisbanenorthbug.com with name/postcode/email, or sign up at a meeting. Members get a private Facebook forum. No form.
- **Contact:** contact@brisbanenorthbug.com; email icon only in header.
- **About/committee:** no named committee.
- **Resources / council plans:** council and TMR documents are linked inline in posts (Priority Route Maps, design guidelines, City Plan). Advocacy Hub links to Space4CyclingBNE and sister BUGs (mostly Facebook).
- **Good:** dated, frequent, substantive posts; corridor-based project tracker with status; letters and council replies published as PDFs with reference numbers; every campaign names who to write to; newsletter archived on the web; shareable.
- **Bad:** project pages stale (2016); status is free text in titles; no maps anywhere; placeholder "#" nav items; menu labels like "All the Way to EJ" and "Campaign Shop" are opaque to newcomers; no excerpts on home cards; unlabeled icons.
- **Steal:** corridor-grouped project tracker with status; correspondence log with PDFs + council reference numbers; "who to write to" block; submission-guide posts with deadline; web-archived newsletter.

## 2. Space for Cycling Brisbane (Space4CyclingBNE)

- **URL:** https://space4cyclingbne.com/
- **Platform:** WordPress.com (hosted), stock theme. Coalition of Airport, CBD, North, EaST, West and South BUGs. Posts are authored by "eastbug" (EaST BUG effectively uses this as its website).
- **Top nav:** Home | About Us | Policies | Campaigns | Resources | Weekly Digests; Donate button; Facebook/Instagram/YouTube.
- **News:** chronological blog with dates, images, email subscribe ("42 subscribers"), 17 pages of archive. Latest 16 Jun 2026 (Shafston Ave Bikeway); busy cluster Mar 2026 on e-bike laws; Jan/Feb 2026 on North Brisbane Bikeway and Viola Place. "Weekly Digests" (https://space4cyclingbne.com/weekly-digests/) ran Dec 2019 to Feb 2022 as dated "This week:" roundups for people not on Facebook, then stopped; 2024 entries are candidate profiles.
- **Advocacy structure:**
  - **Policies:** six numbered policy pages (safer routes to schools; local streets not through streets; protected space on main roads; connected direct network; 30 km/h residential; bike-friendly centres). Simple and good for a static site.
  - **Campaigns:** CBD Protected Bike Grid https://space4cyclingbne.com/cbd-protected-bike-grid/ - vision statement, grid map image, photo of existing George St lane, "benefits" section with cited sources, then **street-by-street rationale** (Ann/George/Edward/Margaret: proposed side, parking/loading/taxi/bus-stop impacts counted), printable postcard to the Lord Mayor (PDF). No status field; council rejection only discoverable via Correspondence page.
  - **Sylvan Road, Toowong** https://space4cyclingbne.com/sylvan-road-toowong/ - per-issue page: title = street + suburb; two captioned photos; problem (door-zone lane between two bikeways); ask ("We need a safe, separated bike lane..."); council response described in prose (peak-period parking restriction, "insufficient"); May 2015 petition of 700 signatures; links to newspaper and BCC Active Transport Strategy. No map, no status label.
  - **How-to pages:** "Write to your Councillor" https://space4cyclingbne.com/write-to-your-councillor/ (find your ward via electoral map; find councillor contact; six suggested letter points; attach council rejection letter PDF; list of E&C committee members; be respectful; cc the group). "Attending Council Committee Meetings" and "Attending Council Meetings".
  - **Correspondence / Media Releases** https://space4cyclingbne.com/newsmedia-release/ - two lists grouped by year, newest first, "title - date", PDFs (e.g. "Council's letter rejecting the CBD protected bike grid - 25 January 2017").
  - **Election campaigns:** candidate surveys and per-ward candidate profiles (2016 BCC, 2016 federal, 2017 and 2024 state).
  - **Resources:** "Whose road is that?" (council vs TMR responsibility explainer), BAZ (bicycle awareness zones) explainer, commuter route reviews (one rider rode from 5 km out to City Hall, Jul to Sep 2016, narrative + video), video library, Principal Cycle Network Plan post linking TMR.
- **Rides:** none. **Membership:** none (donate via bank transfer; annual film night fundraiser). **Contact:** page. **About:** "Who is Space4cyclingbne" with member group list.
- **Good:** policy platform pages; letter-writing how-to; correspondence library; "whose road is that" explainer; election candidate scorecards; email subscribe.
- **Bad:** WordPress.com ads/branding; campaign pages have no status/outcome; digests abandoned; much content is 2015 to 2017 and undated on the page; navigation mixes pages and posts.
- **Steal:** Policies section; "Write to your councillor" page adapted for Ipswich wards; "Whose road is that?" (Ipswich City Council vs TMR vs Qld Rail); correspondence library format.

## 3. Brisbane CBD BUG

- **URL:** Facebook https://www.facebook.com/cbdbug and Twitter/X https://twitter.com/cbdbug. www.cbdbug.org.au (cited in 2013 to 2023 parliamentary submissions) no longer resolves (DNS dead).
- **Platform:** Facebook-only now. ~800 members, formed 2005, monthly meetings, strong on parliamentary submissions (e.g. Transport and Other Legislation Amendment Bill 2023, submission 5) - but those PDFs live only on parliament.qld.gov.au.
- **Lesson:** the most prolific submitter in the state lost its web archive when the domain lapsed; a submissions library needs to live on a site you control and be mirrored (e.g. GitHub).

## 4. EaST BUG (Easy and Sustainable Transport BUG), Brisbane east/bayside

- **URL:** facebook.com/EaSTBUGInc ; eastbug.org.au dead. Posts on space4cyclingbne.com under author "eastbug".
- Covers Wynnum-Manly, Morningside etc. (the "Bayside" area). Facebook-only; relies on the Space4Cycling WordPress.com blog for long-form posts.

## 5. Brisbane West BUG

- **URL:** facebook.com/brisbanewestbug ; westbug.org.au dead. Launched Oct 2015. Facebook-only.

## 6. Brisbane South BUG

- **URL:** https://www.facebook.com/BrisbaneSouthBUG . Facebook-only. Co-convenor Mary Doolan also co-convenes CBD BUG and spoke at BCC council 3 Sep 2024.

## 7. Airport BUG

- **URL:** https://sites.google.com/site/airportbug/ (classic Google Sites, now redirects to Google login - effectively dead); Facebook page.

## 8. Sisters of the Saddle (women's advocacy/social, Brisbane)

- **URL:** https://sistersofthesaddle.com/ - WordPress + Divi, bot-blocking (serves a "please update your browser" page to curl; WebFetch got only "Home Page"). Dates in markup Sep/Oct 2026 so it is live and current. Could not inspect structure.

## 9. Get Around Caboolture (Moreton Bay) - best "take action" toolkit

- **URL:** https://getaroundcaboolture.au/
- **Platform:** WordPress 7.1 + Elementor + Hello theme, commercial template; donations via mycause.com.au; survey via healthystreets.com.
- **Top nav:** What's the issue? | Podcasts | Your mobility mix | Transport toolkits | Events, Projects | "Support our cause" button.
- **News:** no dated feed; podcast "Streets and People" is the ongoing content; media coverage list (Local Times 2023/2024, Guardian Feb 2024). Newsletter signup form. Week Without Driving 1 to 8 Oct banner.
- **Advocacy:** broad transport-poverty framing (not bike-specific); "What's the issue?" is statistics + narrative, not per-issue. **Measurable 2026 goals** on home page (one school from 15% to 35% non-car arrivals; 100 more young people riding to work/study). "Damaged footpath?" section routes hazard reports to **Snap Send Solve** (same app Ipswich City Council uses). **Transport toolkits** page https://getaroundcaboolture.au/transport-toolkits/ : who to contact (council/state/federal lookup), the key question to ask, suggested wording for "no footpath funding" (cites Disability Standards, AHRC footpath FAQ), wording for bus/train cost objections, how to involve federal MPs.
- **Rides:** none. **Membership:** none (donate, volunteer, newsletter, Facebook group). **Contact:** page. **About:** mission on home page, no committee. **Council plans:** none linked.
- **Good:** public measurable goals; affiliations strip (Better Streets, Bicycle Network, Strong Towns); media list; toolkits with sample wording; Snap Send Solve pointer.
- **Bad:** three different names for the group; uncited stats; no dates; donate CTA repeated; no issue tracker.
- **Steal:** "Report a hazard" section pointing at Snap Send Solve with what-to-photograph tips; measurable annual goals; media/coverage list; talking-points toolkit.

## 10. Sunshine Coast BUG (SCBUG)

- **URL:** https://scbug.org/ (new, 2026). Old page https://www.scbclub.net/scbug/ (Sunshine Coast Bicycle Club site) now just says "moved to SCBUG.org". Linktree also used.
- **Platform:** Squarespace.
- **Top nav:** Resources (Events Calendar, Newsroom) | Join a Riding Group (Sunshine Coast Bicycle Club) | Safety Campaign (Camera On Board, Camera Options, The Law, Police Reporting, UpRide) | "Join (It's Free)" button.
- **News:** https://scbug.org/news - author byline + date + excerpt + Read More. Six posts, 9 Mar 2026 to 16 Aug 2026: "SCATAC Begins a New Chapter" (council active transport advisory committee report), General Meeting Summary (2 Jul), e-bike law response, "Camera on Board" media release and update, response to parliamentary e-mobility report.
- **Advocacy:** one structured campaign, **Camera On Board** (https://scbug.org/camera-on-board): stats > goals > methods > "Have you asked yourself?" > sub-pages for camera options, the law (A Metre Matters), police reporting + UpRide, four-week rollout schedule, survey. No per-issue pages, no map, no submissions library. Mentions Coastal Pathway, 2032 Olympics, The Wave rail.
- **Events:** native Squarespace events list with per-event Google Calendar / ICS links; six 2026 events, all meetings or campaign sessions (General Meeting 26 Jun 2026, CoLab Maroochydore). No rides (rides are the club's job).
- **Membership:** free "supporter" signup (form on page); five rider personas ("Who should become a supporter?").
- **Contact:** form, chair@scbug.org, Facebook group, Linktree. **About:** vision statement only; no committee.
- **Good:** clean split between BUG (advocacy) and club (rides); free supporter model; ICS/Google links on events; meeting summaries posted as news; the persona section; privacy statement.
- **Bad:** no About/committee; no maps/resources; empty-looking home; no council plan links; "Join" vs "Supporter" wording.
- **Steal:** per-event ICS/Google Calendar links; posting a summary after every general meeting and every council advisory-committee meeting; "Police reporting" how-to.

## 11. Toowoomba Region BUG (TRBUG)

- **URL:** https://www.trbug.org.au/ (trbug.org.au > public.trbug.org.au > www). **Platform:** new Google Sites.
- **Nav:** Home | Membership | Contact Us. Content: "What is TRBUG?" (independent local BUG associated with BQ; social rides + promotion) and membership rule (guests for 2 rides, then join BUG + BQ for insurance).
- No news, no dates, no advocacy pages, no ride calendar visible, no committee. Essentially a business card. Bad example of what happens when the site is an afterthought; the group's real activity is elsewhere.

## 12. Gold Coast BUG

- **URL:** https://www.facebook.com/groups/6585606254783433 only. No website. Contact gcbug@myyahoo.com.

## 13. Logan BUG

- **URL:** https://facebook.com/groups/loganbug only. No website.

## 14. Bribie BUG (Moreton Bay)

- **URL:** https://sites.google.com/site/bribiebug/ . **Platform:** Google Sites (classic look, still public).
- **Nav:** HOME | Ride Lists | Membership | Photos | Contact Us; sub-pages Past Ride Lists, Rules of Association, Club Etiquette, Basic Bike Kit, Bribie BUGs, Other BUGs.
- ~100 members; **very clear weekly ride table** (Mon/Wed/Thu/Sat, start time, start point, distance, pace, coffee stop) and quarterly ride lists (Oct to Dec 2026). "Last updated March 2026" conflicts with Oct 2026 content. Advocacy is one sentence. Three Facebook groups. No committee listed.
- **Steal:** the weekly ride table format (day, time, start, distance, pace, coffee) if Ipswich BUG runs rides.

## 15. Fraser Coast BUG (Hervey Bay)

- **URL:** https://www.fcbug.org.au/ . **Platform:** WordPress + Divi child theme, GiveWP plugin, built by JR Marketing Group.
- **Nav:** Home | About Us | Rail Trail (Mary2Bay Rail Trail Home; Rail Trails Australia) | Resources (Equipment, Bike Fit Kit, Riding Skills) | Links (BQ, FCBUG Facebook group) | Contact Us; CTAs "New Members Apply Here" / "Renewing Members Apply Here".
- **Membership flow** (https://fcbug.org.au/join-us-now/) - the most complete in QLD: join BQ first (insurance) > form (name, email, optional address/phone, add family member, BQ number yes/no, photo consent, payment method, declaration) > $20 pp per financial year via Stripe link or Bendigo bank transfer with surname reference > committee reviews > added to email list. Incorporated association with MOU with BQ; formed 2003; strategic plan 2021 to 2024 exists (found on readkong, not on site).
- No news, no calendar, no advocacy pages, no committee list; parent menu items are "#" placeholders; footer says 2024.
- **Steal:** the join flow steps and the "join BQ first for insurance" explanation; Bike Fit Kit / riding skills PDFs as resources.

## 16. Cycle For Life Rockhampton

- **URL:** https://www.cycle4liferockhampton.com/ . **Platform:** new Google Sites.
- **Nav:** about | detailed schedule | routes | calendar | Bunch Riding Etiquette | Gentle-folk Single-speed... Society | tour de Capricorne | POI | links | contact us.
- Informal social riding group ("no one representative or organiser"); mapped routes, rolling two-month roster, Google Group mailing list, Strava club. No advocacy, no dated news. Long liability fine print.

## 17. Innisfail BUG Inc

- **URL:** https://innisfailbug.wordpress.com/ . **Platform:** WordPress.com free.
- **Nav:** Home | Cycling in Innisfail | Featured routes | Group rides | Public events | Safety tips | Gallery | Membership | Contact | Member's portal | Blog.
- Good IA for a small-town BUG (routes, rides, safety, membership, member portal) but content frozen at Jan 2018. "Advocating for cyclists" section says hazards are raised with council via contact page.

## 18. Cairns BUG, Townsville BUG, Mackay BUG, Capricorn Coast BUG, Bundaberg (Mad Cycologists), CQ Spin Sisters, Beaudesert BUG

- Cairns: facebook.com/cairnsbug only; TMR partnered with it in 2008.
- Townsville: townsvillebug.com lapsed and is now a casino spam page - do not link. Made a 2013 parliamentary submission. Email only.
- Mackay: bicyclemackay.org.au DNS dead; facebook.com/bicyclemackay.
- Capricorn Coast (Yeppoon): capcoastbug.com.au DNS dead; Facebook group.
- Bundaberg: madcycologists.org.au returns a Wix "ConnectYourDomain" error (dead). Social Sunday rides + City to Coast ride. Council also runs a Bundaberg Regional Cycling Reference Group.
- CQ Spin Sisters, Beaudesert: Facebook / email only.

## 19. Ipswich BUG (current site, for baseline)

- **URL:** https://www.ipswich-bug.org/ . **Platform:** WordPress 7.1, Twenty Twenty-Five theme (footer says SuperbThemes), ugly ?p= permalinks.
- **Nav:** Home | Contact (?page_id=72: ipswichbug@gmail.com + Facebook link; generic LinkedIn/Instagram icons that go nowhere).
- Two posts: "Ipswich Central redevelopment" (29 Jul 2026 - walkshop report; separated bikeway on South and Limestone Streets; shared path to Nicholas St mall; concern about Brisbane St's four lanes and the missing link to Top of Town; annotated images) and "What's with the attitude?" (3 Aug 2026). Footer "© 2023". No about, join, meetings, rides, issues, resources. Not in BQ directory; not on council's cycling pages.

## 20. Interstate reference worth one look: Cyclescape

- https://www.cyclescape.org/issues (UK, used by Cycle Ipswich UK - NOT Ipswich Qld; https://groups.google.com/g/cycle-ipswich is the UK group). Per-issue model: title, creator + date, geographic location drawn on a map (point/route/area), description, tags, deadline, votes, discussion threads; list / map / popular tabs; tag filtering. It is the cleanest "issues on a map" pattern seen; a static site can replicate the fields with a JSON file + Leaflet.

---

## Cross-cutting patterns

1. **Platform reality:** 5 of 23 directory domains are dead or hijacked; most active groups are Facebook-only; the three sites with real advocacy depth (Brisbane North, Space4Cycling, SCBUG) are WordPress/WordPress.com/Squarespace. Nobody in QLD has a static site. Nobody has a map of issues. Nobody has a status badge; the best (Brisbane North) hand-writes status into titles and it has rotted.
2. **News:** the credible groups show dated posts on the home page and keep a cadence of at least monthly; dates are the trust signal. Meeting summaries (SCBUG) and councillor-meeting write-ups (BN BUG) are cheap, regular content.
3. **Advocacy content that exists:** policy platforms (S4C), per-corridor project trackers (BN BUG), request-for-action pages with a dated correspondence log and council PDFs (BN BUG), correspondence/media-release libraries (S4C), how-to-write-to-council pages (S4C, Get Around Caboolture), submission-guide posts with deadlines (BN BUG), petitions list (BN BUG), hazard reporting pointed at Snap Send Solve (GAC), safety campaign with police-reporting how-to (SCBUG). Nothing has before/after photos, status filters or a map.
4. **Membership:** three models - free supporter signup (SCBUG, BN BUG by email), paid incorporated association + BQ insurance ($20, FCBUG), none (S4C, GAC). All say "join BQ for insurance".
5. **Rides:** BUGs that ride publish a weekly table (Bribie) or defer to a club (SCBUG). Meeting dates with ICS links (SCBUG) are the minimum.
6. **Council links:** only BN BUG and S4C link to plans (TMR Priority Route Maps, PCN, BCC strategies) and they do it inline in posts, not as a resources page.
7. **Common failures:** undated pages, "#" placeholder menus, stale footers, opaque campaign names, no committee names, generic email addresses, reliance on Facebook for the canonical record.

## Recommended per-issue page schema for Ipswich BUG (synthesised)

Front-matter fields: title; slug; location (lat/lng + street + suburb); council division/ward; responsible authority (ICC / TMR / Qld Rail / developer - the "whose road is that" field); status (one of: Reported, Raised with council, Acknowledged, Funded, In design, Under construction, Resolved, Rejected, Stalled); date opened; last updated; tags (bikeway gap, parking in lane, lighting, crossing, speed, maintenance). Body sections: The problem (photos, video, crash/near-miss evidence) > What we asked for (numbered) > Correspondence log (date, to/from, PDF, reference number, one-line summary) > Council/TMR response (quoted) > What you can do (Snap Send Solve link, councillor email, petition, submission deadline) > Related plans (ATAP action number, PCN map sheet, Shape Your Ipswich page). Index page: filter by status and tag, and plot on a Leaflet map.

---

## Ipswich City Council and TMR material to link

### iGO Ipswich Transport Strategy 2025 (council transport plan)
- Landing: https://www.ipswich.qld.gov.au/About-Council/Media-and-Publications/Corporate-Publications/Strategy-and-Implementation-Programs/iGO-Ipswich-Transport-Strategy-2025
- iGO Summary Report: https://www.ipswich.qld.gov.au/files/assets/public/v/1/about-council/media-and-publications/corporate-publications/strategy-and-implementation-programs/igo-city-of-ipswich-transport-plan/documents/igo-transport-strategy-summary-report.pdf
- iGO Technical Report: https://www.ipswich.qld.gov.au/__data/assets/pdf_file/0007/281572/iGO-Transport-Strategy_Technical-Report_A4_6.pdf
- Contact: igoipswich@ipswich.qld.gov.au, 07 3810 6666

### iGO Active Transport Action Plan (2016, still the operative cycling plan)
- Summary report PDF: https://www.ipswich.qld.gov.au/files/assets/public/v/1/about-council/media-and-publications/corporate-publications/strategy-and-implementation-programs/igo-city-of-ipswich-transport-plan/documents/igo-active-transport-action-plan.pdf (the older __data/assets/pdf_file/0020/120179 URL is 404)
- Technical report PDF: https://www.ipswich.qld.gov.au/files/assets/public/v/1/about-council/mayor-and-councillors/code-of-conduct/media-and-publications/corporate-publications/strategy-and-implementation-programs/igo-city-of-ipswich-transport-plan/documents/active-transport-action-plan-technical-report.pdf
- Active Transport Wayfinding Guidelines: https://www.ipswich.qld.gov.au/files/assets/public/v/1/about-council/media-and-publications/corporate-publications/strategy-and-implementation-programs/igo-city-of-ipswich-transport-plan/documents/active-transport-wayfinding-guideline-a11501995.pdf
- Active Transport Sign Design Manual: https://www.ipswich.qld.gov.au/files/assets/public/v/1/about-council/media-and-publications/corporate-publications/strategy-and-implementation-programs/igo-city-of-ipswich-transport-plan/documents/active-transport-sign-design-manual.pdf
- Key facts (from the PDF text): mode-share targets at 435,000 population - cycling from 0.5% (3,000 trips/day) to **3% (45,000 trips)**, walking 8.5% to 11%, private vehicle 84.5% to 75%. Network hierarchy section (p22) adopts TMR Principal Cycle Network routes as the top tier. Action 1.3 (AT3): plan/prioritise/advocate/deliver PCN bikeway projects (ongoing). Action 1.4 (AT9, short term): corridor studies for City Centre to Brassall Bikeway via Riverlink; City Centre to Yamanto/Deebing Heights via Deebing Creek (extend to Flinders View, Ripley); City Centre to RAAF bikeway; City Centre to Booval; Goodna Creek Bikeway south from Gos Drive to Redbank Plains; Springfield Central to Camira; Springfield Central to Redbank Plains South. Action 1.5: citywide Road Safety Strategy with pedestrian/cyclist crash analysis. Action 2.1: pedestrian priority zones in Ipswich City Centre, Springfield Central, Goodna, Ripley Town Centre. Also Road Safety Action Plan summary: https://www.ipswich.qld.gov.au/files/assets/public/v/1/about-council/media-and-publications/corporate-publications/strategy-and-implementation-programs/igo-city-of-ipswich-transport-plan/documents/igo-rsap-summary-report-final-a6183149.pdf
- Useful advocacy hook: these are the council's own numbered commitments; cite "ATAP action 1.4" on issue pages.

### Ipswich Central / City Centre Bikeway (Shape Your Ipswich - Social Pinpoint platform)
- Ipswich Central Heart (five components incl. **Ipswich City Centre Bikeway** and **Brisbane Street streetscape refresh**; $3.8m federal uPPP design funding; consultation 7 Jul to 2 Aug 2026): https://www.shapeyouripswich.com.au/ipswich-central-heart ; council news 20 Jul 2026: https://www.ipswich.qld.gov.au/News-Articles-Folder/2026/Transformational-Ipswich-Central-Heart-project-takes-next-step
- Ipswich City Centre Bikeway stages 1 and 2 (concept design; physically separated for most of corridor; Stage 3 detailed design due Mar 2027; decision mid-to-late 2027): https://www.shapeyouripswich.com.au/ipswich-central-bikeway
  - Overview map of Ipswich Central Cycle Projects: https://hdp-au-prod-app-ipsw-shapeyouripswich-files.s3.ap-southeast-2.amazonaws.com/9216/4515/3483/Inner_CBD_Bikeways_Overview_Map_1200px.jpg
  - Bikeway concept image: https://hdp-au-prod-app-ipsw-shapeyouripswich-files.s3.ap-southeast-2.amazonaws.com/2717/8294/8059/Inner_City_Centre_Bikeway.png
  - Urban Design Framework committee report (Apr 2026): https://ipswich.infocouncil.biz/Open/2026/04/EACDC_20260421_AGN_4067_AT_WEB.htm
- Earlier "Cycling through Ipswich Central" page (2022 consultation; Oct 2025 update: Stage 1 Thorn St/South St to East St/South St - design 25/26 and 26/27, construction from 2027/28; Stage 2 South St/Nicholas St to Roderick St/Omar St along Limestone St - design 25/26 and 26/27): https://www.shapeyouripswich.com.au/cyclingthroughipswichcentral
  - Preferred route map: https://hdp-au-prod-app-ipsw-shapeyouripswich-files.s3.ap-southeast-2.amazonaws.com/9716/4548/5954/Inner_CBD_Bikeways_Preferred_Route_Map_960x540px.jpg
  - 2022 Community Engagement Report: https://www.shapeyouripswich.com.au/download_file/1984/797 ; engagement summary (125 participants, 278 contributions, 75% support; asks: connectivity, physical separation, green lanes feel unsafe): https://www.shapeyouripswich.com.au/cyclingthroughipswichcentral/cbd-cycle-network-feedback
  - Capital Works Program 2025 to 2028: https://www.shapeyouripswich.com.au/download_file/7911/797
  - Ipswich Central Cycle Projects newsletter: https://www.shapeyouripswich.com.au/download_file/1066/797
  - Project contact: IEDProjects@ipswich.qld.gov.au
- Brisbane Street Refresh: https://www.shapeyouripswich.com.au/brisbane-street-refresh
- Nicholas Street Precinct timeline (no cycling content): https://www.ipswich.qld.gov.au/About-Council/Initiatives/Transparency-and-Integrity-Hub/Current-Data-Stories/Nicholas-Street-Precinct-Redevelopment

### Other council cycling pages
- Ride Ipswich (12 routes with Google Maps start pins: Brassall Bikeway 14 km return, Goodna Creek N/S, Goodna to Redbank, Ipswich Central to Bundamba, Ipswich Motorway, Limestone Park to Wulkuraka, Opossum Creek, Small Creek, Springfield Central, Western Ipswich Bikeway Link, Wulkuraka to Brassall): https://www.ipswich.qld.gov.au/Live/Healthy-Lifestyle/Ride-Ipswich
- Active School Travel: https://www.ipswich.qld.gov.au/Live/Healthy-Lifestyle/Active-School-Travel
- Eastern Ipswich Link Bikeway (Queen Victoria Pde, opened Aug 2023, $1.6m 50/50 with Qld Cycle Network Local Government Grants): https://www.ipswich.qld.gov.au/News-Articles-Folder/2023/Cycling-link-from-Queens-Park-to-Ipswich-city-centre-now-open
- Brassall Bikeway Stage 5 fact sheet (2019): https://www.ipswich.qld.gov.au/__data/assets/pdf_file/0019/122941/Brassall-Bikeway-FS_Stage-5_2019.pdf
- No single council "cycle projects" page exists; project status is scattered across news items, Shape Your Ipswich and capital works PDFs - a gap the BUG site can fill with its own tracker.

### Report a problem
- Council "Report an Issue": https://www.ipswich.qld.gov.au/About-Council/Report-an-Issue - preferred channel is **Snap Send Solve** (iOS https://apps.apple.com/au/app/snap-send-solve/id377854149 ; Android https://play.google.com/store/apps/details?id=com.outware.snapsendsolve). Categories include Pavement and Footpath, Roads and Signage, Trees, Parks and Council Facilities, Graffiti; a reference number is issued; email on receipt and closure. Urgent/dangerous: (07) 3810 6666, 24/7. Online form exists for non-app users (linked from that page). General email council@ipswich.qld.gov.au.
- State-controlled roads (Warrego Hwy, Cunningham Hwy, Ipswich Motorway, Brisbane Rd, Centenary Hwy etc.): TMR online feedback form via https://www.qld.gov.au/transport/conditions/report/repair ; urgent 13 19 40. Use TMR Road Lookup to determine ownership (basis for an Ipswich "Whose road is that?" page).
- Unsafe driving / close passes: Policelink 131 444 (and the SCBUG police-reporting/UpRide how-to as a template).

### TMR Queensland Principal Cycle Network (PCN)
- Note: tmr.qld.gov.au HTML pages are behind Cloudflare (403 to scripts) but fine in a browser; PDFs download directly.
- PCN overview: https://www.tmr.qld.gov.au/travel-and-transport/cycling/principal-cycle-network/overview
- View the network: https://www.tmr.qld.gov.au/travel-and-transport/cycling/principal-cycle-network/view-the-network
- **Ipswich City Council QPCN map series (May 2026, maps 219 to 234, 17 MB PDF; legend: Principal Route / Future Principal Route / Tourism Route; "indicative"):** https://www.tmr.qld.gov.au/_/media/travelandtransport/cycling/principal-cycle-network-plans/network-maps/qpcn_ipswich-city.pdf
- Former SEQ PCNP 2016 (has an Ipswich chapter): https://www.tmr.qld.gov.au/-/media/Travelandtransport/Cycling/Principal-Cycle-Network-Plans/SEQ_PCNP.pdf?la=en
- SEQ Priority Route Maps 2021 addendum (Ipswich = Map 37, Springfield = Map 38): https://www.tmr.qld.gov.au/-/media/Travelandtransport/Cycling/Principal-Cycle-Network-Plans/PRM_SEQ_2021.pdf?la=en
- GIS layer (ArcGIS REST, usable in Leaflet): https://spatial-gis.information.qld.gov.au/arcgis/rest/services/Transportation/CycleNetworkPlan/MapServer
- Also cited by BN BUG: TMR Priority Cycle Route Improvement Plan Guidelines v1.0 (Jan 2022); TMR Guideline: Selection and Design of Cycle Tracks (Jul 2025); Austroads Guide to Road Design Part 6A (2026).

### Other Ipswich items
- Qld Parliament e-petition 4217-25 "Bike paths in Ipswich" (Anthony Byrne, Bundamba; 272 signatures; closed 24 Jun 2025; responded Hon Brent Mickelberg MP 25 Jul 2025; asks that existing bike paths/lanes be connected): https://www.parliament.qld.gov.au/Work-of-the-Assembly/Petitions/Petition-Details?id=4217
- Bicycle Queensland runs the Ipswich Scenic 100 (7 Mar 2027) - a natural partnership/event listing.
- Council's "join a cycling group" page (ipswich.qld.gov.au/live/healthy_lifestyle/ride-ipswich/join-a-cycling-group) is 404 in all casings tried; search snippets say it lists Ipswich Cycling Club and Springfield Riders Group, not Ipswich BUG. Ask council to add the BUG when the page is restored.

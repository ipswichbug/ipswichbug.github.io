# Ipswich BUG website

Static site for the Ipswich Bicycle User Group, built with [Eleventy](https://www.11ty.dev/). No database, no server, no plugins to update. Content is Markdown files in `src/`; every push to `main` rebuilds and deploys the site.

## Editing content

You don't need to install anything to edit content. Edit the Markdown files on GitHub (pencil icon, then "Commit changes"). The site rebuilds in about a minute.

| What | Where | Notes |
|---|---|---|
| News post | `src/news/YYYY-MM-DD-slug.md` | Copy `templates/post.md`. The date prefix is stripped from the URL. |
| Issue | `src/issues/slug.md` | Copy `templates/issue.md`. Set `status`, `lat`/`lng` for the map, and add to `updates` as things happen. |
| About / Join / Rides / Resources / Contact | `src/*.md` | Plain Markdown. |
| Home page | `src/index.njk` | Pulls the 3 latest issues and posts automatically. |
| Menu | `src/_data/nav.json` | |
| Email, Facebook link, map centre | `src/_data/site.json` | |
| Submissions library | `src/_data/submissions.json` | One object per letter/submission; PDFs go in `src/assets/docs/`. |
| Images | `src/assets/img/` | Keep under ~500 KB each. Reference as `/assets/img/name.jpg`. |

### Issue statuses

`open` (we know, preparing the case) → `raised` (formally put to council/TMR) → `in-progress` (funded or being built) → `resolved` or `won`. Use `parked` for things we're not chasing right now. The issues page and map colour-code these and hide resolved/parked by default.

### Getting coordinates

Right-click a spot in Google Maps and click the numbers, or in OpenStreetMap right-click → "Show address". Paste as `lat:` and `lng:`. Leave both out for LGA-wide policy issues.

## Running locally

```
npm install
npm run dev      # http://localhost:8080, rebuilds on save
npm run build    # writes the site to _site/
```

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. One-time setup:

1. Push this repo to GitHub.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Settings → Pages → Custom domain: `www.ipswich-bug.org`, tick Enforce HTTPS. (`src/CNAME` is already set.)
4. At the DNS host (Route 53 if the domain is in AWS): `www` CNAME → `<github-user>.github.io`, and apex `ipswich-bug.org` A records → GitHub Pages IPs (185.199.108.153, .109.153, .110.153, .111.153).

Cloudflare Pages or Netlify work just as well: build command `npm run build`, output directory `_site`.

## Editing in the browser (optional)

`src/admin/` holds a [Decap CMS](https://decapcms.org/) config that gives a WordPress-style editor at `/admin/`. Every save is a git commit. To switch it on, set `repo:` in `src/admin/config.yml` and set up GitHub OAuth (easiest: host on Netlify and use Netlify Identity + Git Gateway; otherwise run a small OAuth proxy on Cloudflare Workers). Until then, editing on GitHub works fine.

## Structure

```
src/
  _data/          site.json (name, email, links), nav.json
  _includes/      layouts (base, page, post, issue) and card partials
  assets/         css, js (Leaflet issues map), img
  news/           one Markdown file per post
  issues/         one Markdown file per issue, plus index page, map JSON and report page
  *.md            standalone pages
  feed.njk        Atom feed at /feed.xml
templates/        copy-and-fill starting points for posts and issues
eleventy.config.js  filters, collections, status definitions
docs/             research notes on other Australian BUG websites (what to copy, what to avoid)
```

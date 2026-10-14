import { DateTime } from "luxon";
import * as rss from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

const STATUS = {
  open:        { label: "Open",               order: 1 },
  raised:      { label: "Raised with council", order: 2 },
  "in-progress": { label: "In progress",      order: 3 },
  resolved:    { label: "Resolved",           order: 4 },
  won:         { label: "Win",                order: 5 },
  parked:      { label: "Parked",             order: 6 },
};

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(rss.default || rss);

  eleventyConfig.setLibrary("md", markdownIt({ html: true, linkify: true, typographer: true })
    .use(markdownItAnchor, { level: [2, 3] }));

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addWatchTarget("src/assets/css/");

  eleventyConfig.addGlobalData("statuses", STATUS);
  eleventyConfig.addGlobalData("buildTime", () => new Date());

  // ---- Filters ----
  eleventyConfig.addFilter("readableDate", (d, fmt = "d LLLL yyyy") =>
    DateTime.fromJSDate(d instanceof Date ? d : new Date(d), { zone: "Australia/Brisbane" }).toFormat(fmt));
  eleventyConfig.addFilter("isoDate", (d) =>
    DateTime.fromJSDate(d instanceof Date ? d : new Date(d), { zone: "Australia/Brisbane" }).toISODate());
  eleventyConfig.addFilter("statusLabel", (s) => (STATUS[s] || { label: s }).label);
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("excerpt", (content, n = 180) => {
    const text = (content || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return text.length > n ? text.slice(0, n).replace(/\s\S*$/, "") + "…" : text;
  });
  eleventyConfig.addFilter("whereStatus", (arr, ...statuses) =>
    arr.filter((i) => statuses.includes(i.data.status)));
  eleventyConfig.addFilter("activeIssues", (arr) =>
    arr.filter((i) => !["resolved", "won", "parked"].includes(i.data.status)));
  eleventyConfig.addFilter("byStatusOrder", (arr) =>
    [...arr].sort((a, b) => (STATUS[a.data.status]?.order ?? 9) - (STATUS[b.data.status]?.order ?? 9)
      || (b.data.updated || b.date) - (a.data.updated || a.date)));
  eleventyConfig.addFilter("jsonify", (v) => JSON.stringify(v));
  eleventyConfig.addFilter("stripDatePrefix", (slug) => slug.replace(/^\d{4}-\d{2}-\d{2}-/, ""));

  // ---- Collections ----
  eleventyConfig.addCollection("news", (api) =>
    api.getFilteredByGlob("src/news/*.md").sort((a, b) => b.date - a.date));
  eleventyConfig.addCollection("issues", (api) =>
    api.getFilteredByGlob("src/issues/*.md").sort((a, b) => (b.data.updated || b.date) - (a.data.updated || a.date)));
  eleventyConfig.addCollection("issueCategories", (api) => {
    const set = new Set();
    api.getFilteredByGlob("src/issues/*.md").forEach((i) => i.data.category && set.add(i.data.category));
    return [...set].sort();
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

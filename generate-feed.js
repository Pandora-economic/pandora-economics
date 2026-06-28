/* Génère feed.xml (RSS 2.0), sitemap.xml (avec hreflang) et robots.txt
   à partir de publications.js. Lancer :  node generate-feed.js            */
const fs=require("fs");
const BASE="https://pandora-economic.github.io/pandora-economics/";
global.window={};
eval(fs.readFileSync("publications.js","utf8"));
const pubs=window.pubsSorted ? window.pubsSorted() : (window.PUBLICATIONS||[]);
const esc=s=>String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const MM=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DD=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
function rfc822(iso){const d=new Date(iso+"T00:00:00Z");
  return `${DD[d.getUTCDay()]}, ${String(d.getUTCDate()).padStart(2,"0")} ${MM[d.getUTCMonth()]} ${d.getUTCFullYear()} 00:00:00 +0000`;}
const today=new Date().toISOString().slice(0,10);

/* ---- RSS ---- */
let items=pubs.map(p=>{
  const link=`${BASE}article.html?n=${p.num}`;
  return `    <item>
      <title>${esc(p.titre)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <category>${esc(p.theme)}</category>
      <description>${esc(p.resume)}</description>
    </item>`;}).join("\n");
const rss=`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PANDORA Economics — Publications</title>
    <link>${BASE}</link>
    <atom:link href="${BASE}feed.xml" rel="self" type="application/rss+xml" />
    <description>Analyses économiques indépendantes : macroéconomie, marchés, politiques monétaires.</description>
    <language>fr</language>
    <lastBuildDate>${rfc822(today)}</lastBuildDate>
${items}
  </channel>
</rss>
`;
fs.writeFileSync("feed.xml",rss);

/* ---- Sitemap (avec alternates hreflang) ---- */
const pages=["","publications.html","auteur.html","mentions-legales.html","confidentialite.html"];
function urlEntry(loc,lastmod){
  const sep=loc.includes("?")?"&amp;":"?";
  const alts=["fr","en","zh"].map(l=>{
    const href=l==="fr"?loc:`${loc}${sep}lang=${l}`;
    return `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}" />`;}).join("\n");
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />
  </url>`;}
let urls=pages.map(p=>urlEntry(BASE+p, today));
pubs.forEach(p=>urls.push(urlEntry(`${BASE}article.html?n=${p.num}`, p.date)));
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
fs.writeFileSync("sitemap.xml",sitemap);

/* ---- robots.txt ---- */
fs.writeFileSync("robots.txt",`User-agent: *
Allow: /
Sitemap: ${BASE}sitemap.xml
`);
console.log(`OK — feed.xml (${pubs.length} items), sitemap.xml (${urls.length} URLs), robots.txt`);

// Fetches the visit total and visits per country from GoatCounter into data/visitors.json,
// run by the deploy workflow before the build (also once a day on a schedule).
// Needs GOATCOUNTER_TOKEN, an API key with only "read statistics", kept as a repository secret.
// Without a site code or token, or on any error, it leaves the committed file as it is.
import fs from "node:fs";

const cfg = JSON.parse(fs.readFileSync("data/counter.json", "utf8"));
const token = process.env.GOATCOUNTER_TOKEN;
if (!cfg.goatcounter || !token) {
  console.log("visitors: no GoatCounter code or token, keeping data/visitors.json");
  process.exit(0);
}

const api = `https://${cfg.goatcounter}.goatcounter.com/api/v0`;
// The API wants whole hours; end at the next one so the current hour counts.
const end = new Date();
end.setUTCHours(end.getUTCHours() + 1, 0, 0, 0);
const range = `start=${cfg.start}T00:00:00Z&end=${end.toISOString().replace(".000", "")}`;

// GoatCounter answers 404 while the range has no visits at all; read that as empty.
async function get(path) {
  const r = await fetch(api + path, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
  if (r.status === 404) return {};
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
  return r.json();
}

try {
  const total = await get(`/stats/total?${range}`);
  const countries = [];
  for (let page = 0; page < 10; page++) {
    const res = await get(`/stats/locations?${range}&limit=100&offset=${page * 100}`);
    for (const { id, name, count } of res.stats ?? []) {
      if (/^[A-Z]{2}$/.test(id ?? "")) countries.push({ id, name, count });
    }
    if (!res.more) break;
  }
  const out = { updated: end.toISOString().slice(0, 10), total: total.total ?? 0, countries };
  fs.writeFileSync("data/visitors.json", JSON.stringify(out, null, 2) + "\n");
  console.log(`visitors: ${out.total} visits from ${countries.length} countries`);
} catch (e) {
  console.log(`visitors: ${e.message}; keeping data/visitors.json`);
}

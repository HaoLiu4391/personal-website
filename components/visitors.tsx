import { VisitCount } from "@/components/site";
import counter from "@/data/counter.json";
import visitorsJson from "@/data/visitors.json";
import world from "@/data/worldDots.json";

type Visits = { updated: string; total: number; countries: { id: string; name: string; count: number }[] };
const visitors = visitorsJson as Visits;

// Where visitors come from: the world as a grid of dots, one per 3 degrees, each
// country's dots shaded by its number of visits. The counts come from GoatCounter at
// build time (scripts/fetch-visitors.mjs). counter.offset carries over the visits
// counted by the old badges (laobi.icu, then hits.sh), which kept only a total, so the
// total above the map runs from counter.since and the map itself from counter.start.

const P = 4; // pixels between dot centres
const CELLS = world.cells as Record<string, number[]>;
const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

// one zero-length segment per dot; the square line cap draws it
function dots(cells: number[]) {
  return cells
    .map((i) => `M${(i % world.cols) * P + P / 2} ${Math.floor(i / world.cols) * P + P / 2}h0`)
    .join("");
}

export function Visitors() {
  if (!counter.goatcounter) return null;

  const seen = visitors.countries.filter((c) => CELLS[c.id]);
  const lit = new Set(seen.map((c) => c.id));
  const land = Object.entries(CELLS).flatMap(([k, v]) => (lit.has(k) ? [] : v));
  const max = Math.max(1, ...seen.map((c) => c.count));
  const level = (n: number) => {
    const t = Math.log1p(n) / Math.log1p(max);
    return t > 0.66 ? 3 : t > 0.33 ? 2 : 1;
  };
  const [year, month] = counter.since.split("-").map(Number);
  const [y0, m0, d0] = counter.start.split("-").map(Number);
  const n = visitors.countries.length;
  // the visits on the map; GoatCounter's own total for the range has come back 0 while
  // the countries held visits, so it is not used here
  const mapped = visitors.countries.reduce((s, c) => s + c.count, 0);
  const where = `${mapped} ${mapped === 1 ? "visit" : "visits"}, ${n} ${n === 1 ? "country" : "countries"}`;

  return (
    <section className="visitors" aria-label="Visitors">
      <p>
        <VisitCount code={counter.goatcounter} built={Math.max(visitors.total, mapped)} offset={counter.offset} /> visits
        since {MONTHS[month - 1]} {year}. Counted by <a href="https://www.goatcounter.com">GoatCounter</a>,
        no cookies.
      </p>
      <svg
        viewBox={`0 0 ${world.cols * P} ${world.rows * P}`}
        role="img"
        aria-label={`World map of where visits came from since ${d0} ${MONTHS[m0 - 1]} ${y0}: ${where}`}
      >
        <path className="land" d={dots(land)} />
        {seen.map((c) => (
          <path key={c.id} className={`seen l${level(c.count)}`} d={dots(CELLS[c.id])}>
            <title>{`${c.name}: ${c.count}`}</title>
          </path>
        ))}
      </svg>
      <p className="where">
        where visits came from since {counter.start}
        {mapped > 0 && `: ${where}`}
      </p>
    </section>
  );
}

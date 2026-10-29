import type { Metadata } from "next";

import { BASE } from "@/constants";

export const metadata: Metadata = { title: "CV · Hao Liu" };

const PDF = `${BASE}/Hao_Liu_CV.pdf`;

export default function CV() {
  return (
    <main>
      <h1>CV</h1>
      <p className="muted">
        Updated October 2026. <a href={PDF}>Download the PDF</a>.
      </p>
      <object className="cv-frame" data={PDF} type="application/pdf" aria-label="CV">
        <p>
          <a href={PDF}>Open the CV</a>
        </p>
      </object>
    </main>
  );
}

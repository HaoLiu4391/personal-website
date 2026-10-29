import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Not found · Hao Liu" };

export default function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <p>Nothing at this address.</p>
      <p>
        <Link href="/">Back to the home page</Link>
      </p>
    </main>
  );
}

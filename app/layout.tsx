import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer, Header } from "@/components/site";
import { siteConfig } from "@/config";

import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1110" },
  ],
};

export const metadata: Metadata = siteConfig;

// Applies a saved light/dark choice before the first paint.
const THEME_INIT =
  "try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={mono.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <div className="page">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

import { LINKS, NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#1c1408]/50 bg-[#0a0a0f27] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <Link href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
            HL
          </span>
          <span className="hidden md:block font-semibold text-gray-300">
            Hao Liu
          </span>
        </Link>

        <div className="hidden md:flex h-full flex-row items-center">
          <div className="flex items-center gap-6 h-auto border border-[rgba(245,158,11,0.38)] bg-[rgba(10,10,15,0.37)] px-[20px] py-[10px] rounded-full text-gray-200 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(245,158,11)] transition"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(245,158,11)] transition"
            >
              Source Code
            </Link>
          </div>
        </div>

        <button
          className="md:hidden text-white focus:outline-none text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#0a0a0f] border-t border-[#1c1408] p-5 flex flex-col items-center text-gray-300 md:hidden">
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(245,158,11)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromLeft } from "@/lib/motion";
import content from "./content.json";

const MAIN_PARAGRAPHS = content.paragraphs.slice(0, 11);

const DIMENSIONS = content.paragraphs.slice(11, 19).map((text) => {
  const match = text.match(/^(.+?)(?:\u7684\u7EF4\u5EA6\u4E0A\uFF0C|\u7EF4\u5EA6\u4E0A\uFF0C|\u4E0A\uFF0C)(.+)$/);
  if (match) {
    const axis = match[1].replace(/^\u5728/, "").trim();
    return { axis, position: match[2].trim() };
  }
  const parts = text.split("\uFF0C");
  return { axis: parts[0].replace(/^\u5728/, ""), position: parts.slice(1).join("\uFF0C") };
});

const AFFINITIES_TEXT = content.paragraphs[19] || "";
const AFFINITIES = AFFINITIES_TEXT.split("\n").filter(Boolean).map((line) => {
  const match = line.match(/\u6211\u548C(.+?)\u63A5\u8FD1\uFF0C\u5728\u4E8E(.+?)[\uFF1B\u3002]?$/);
  if (match) return { name: match[1], reason: match[2] };
  return { name: line, reason: "" };
});

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen pt-[85px] pb-20 px-6 md:px-20">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto"
      >
        <motion.div variants={slideInFromLeft(0.1)} className="mb-8">
          <Link
            href="/"
            className="text-amber-500 hover:text-amber-400 transition text-sm"
          >
            &larr; Back to Home
          </Link>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.2)}
          className="text-[36px] md:text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-4"
        >
          {content.paragraphs.length > 0 ? "\u6211\u7684\u54F2\u5B66\u89C2\u70B9" : ""}
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.25)}
          className="text-gray-500 text-sm mb-12"
        >
          My Philosophical Views
        </motion.p>

        <div className="space-y-6">
          {MAIN_PARAGRAPHS.map((text, i) => (
            <motion.p
              key={i}
              variants={slideInFromLeft(0.3 + i * 0.05)}
              className="text-gray-300 text-base leading-[1.9] tracking-wide"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div variants={slideInFromLeft(0.8)} className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-6">
            {"\u54F2\u5B66\u7EF4\u5EA6\u5B9A\u4F4D"}
          </h2>
          <div className="space-y-3">
            {DIMENSIONS.map((d, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 bg-[#12100a] border border-[#1c1408] rounded-lg p-3 hover:border-amber-500/50 transition-colors"
              >
                <span className="text-amber-400 text-sm font-mono whitespace-nowrap">
                  {d.axis}
                </span>
                <span className="text-gray-400 text-sm">{d.position}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.9)} className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            {"\u54F2\u5B66\u8C31\u7CFB\u4EB2\u7F18"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AFFINITIES.map((a, i) => (
              <div
                key={i}
                className="bg-[#12100a] border border-[#1c1408] rounded-lg p-4 hover:border-amber-500/50 transition-colors"
              >
                <span className="text-amber-400 font-semibold">{a.name}</span>
                <p className="text-gray-400 text-sm mt-1">{a.reason}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1.0)}
          className="mt-16 pt-8 border-t border-[#1c1408]"
        >
          <p className="text-gray-600 text-xs leading-relaxed">
            {content.disclaimer}
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}

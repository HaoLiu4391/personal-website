"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Link from "next/link";

import { PUBLICATIONS } from "@/constants";
import { slideInFromLeft } from "@/lib/motion";

const renderAuthors = (authors: string) => {
  const parts = authors.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export const Publications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const getBibtex = (pub: (typeof PUBLICATIONS)[number]) => {
    const key = pub.authors.split(",")[0].trim().replace(/\*|\s/g, "") + pub.year;
    return `@inproceedings{${key},
  title={${pub.title}},
  author={${pub.authors.replace(/\*\*/g, "")}},
  booktitle={${pub.venue}},
  year={${pub.year}}
}`;
  };

  const copyBibtex = (index: number) => {
    const pub = PUBLICATIONS[index];
    navigator.clipboard.writeText(getBibtex(pub));
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="publications" className="py-20 px-6 md:px-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={slideInFromLeft(0.2)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12"
        >
          Publications
        </motion.h2>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub, index) => (
            <motion.div
              key={pub.title}
              variants={slideInFromLeft(0.3 + index * 0.15)}
              className="group bg-[#0a0520] border border-[#2A0E61] rounded-xl p-6 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                        pub.type === "conference"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                      }`}
                    >
                      {pub.type === "conference" ? "Conference" : "In Prep"}
                    </span>
                    <span className="text-gray-500 text-sm font-mono">
                      {pub.year}
                    </span>
                  </div>

                  <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    {pub.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-1">
                    {renderAuthors(pub.authors)}
                  </p>
                  <p className="text-cyan-400/70 text-sm italic">{pub.venue}</p>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                {"paper" in pub.links &&
                  (pub.links as Record<string, string>).paper &&
                  (pub.links as Record<string, string>).paper !== "#" && (
                    <Link
                      href={(pub.links as Record<string, string>).paper}
                      target="_blank"
                      className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition border border-purple-500/20"
                    >
                      PDF
                    </Link>
                  )}
                {"code" in pub.links &&
                  (pub.links as Record<string, string>).code &&
                  (pub.links as Record<string, string>).code !== "#" && (
                    <Link
                      href={(pub.links as Record<string, string>).code}
                      target="_blank"
                      className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition border border-cyan-500/20"
                    >
                      Code
                    </Link>
                  )}
                <button
                  onClick={() => copyBibtex(index)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-gray-500/10 text-gray-300 hover:bg-gray-500/20 transition border border-gray-500/20"
                >
                  {copiedIndex === index ? "Copied!" : "BibTeX"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

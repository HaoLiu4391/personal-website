"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { PRIMARY_RESEARCH, SECONDARY_RESEARCH } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Research = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedPrimary, setExpandedPrimary] = useState<number | null>(null);
  const [expandedSecondary, setExpandedSecondary] = useState<number | null>(
    null
  );

  return (
    <section id="research" className="py-20 px-6 md:px-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={slideInFromLeft(0.2)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
        >
          Research
        </motion.h2>

        <motion.p
          variants={slideInFromLeft(0.3)}
          className="text-gray-400 text-sm mb-12"
        >
          Click on any project to expand details.
        </motion.p>

        {/* Primary Research */}
        <motion.h3
          variants={slideInFromLeft(0.3)}
          className="text-xl font-semibold text-white mb-6"
        >
          Primary Research
        </motion.h3>

        <div className="space-y-6 mb-16">
          {PRIMARY_RESEARCH.map((project, index) => (
            <motion.div
              key={project.title}
              variants={slideInFromLeft(0.4 + index * 0.15)}
              className="bg-[#0a0520] border-2 border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all cursor-pointer"
              onClick={() =>
                setExpandedPrimary(expandedPrimary === index ? null : index)
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="text-white text-lg font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-cyan-400 text-sm mb-1">
                    {project.advisors}
                  </p>
                  <p className="text-purple-400 text-xs font-mono mb-3">
                    {project.period}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <span
                  className={`text-purple-400 text-lg transition-transform duration-300 mt-1 ${
                    expandedPrimary === index ? "rotate-180" : ""
                  }`}
                >
                  &#9662;
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {expandedPrimary === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-purple-500/20">
                      <h4 className="text-purple-300 text-sm font-semibold mb-3">
                        Key Contributions & Details
                      </h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-gray-400 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-purple-500/50"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {expandedPrimary !== index && (
                <p className="text-purple-400/50 text-xs mt-3 italic">
                  Click to expand details
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Secondary Research */}
        <motion.h3
          variants={slideInFromLeft(0.5)}
          className="text-xl font-semibold text-white mb-6"
        >
          Other Research Projects
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECONDARY_RESEARCH.map((project, index) => (
            <motion.div
              key={project.title}
              variants={
                index % 2 === 0
                  ? slideInFromLeft(0.5 + index * 0.1)
                  : slideInFromRight(0.5 + index * 0.1)
              }
              className="bg-[#0a0520] border border-[#2A0E61] rounded-xl p-5 hover:border-cyan-500/50 transition-all cursor-pointer"
              onClick={() =>
                setExpandedSecondary(
                  expandedSecondary === index ? null : index
                )
              }
            >
              <h3 className="text-white text-base font-semibold mb-1">
                {project.title}
              </h3>
              <p className="text-cyan-400 text-sm mb-1">{project.advisors}</p>
              <p className="text-cyan-400/60 text-xs font-mono mb-3">
                {project.period}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {expandedSecondary === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm leading-relaxed pt-3 border-t border-cyan-500/20">
                      {project.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

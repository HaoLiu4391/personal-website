"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { EXPERIENCES } from "@/constants";
import { slideInFromLeft } from "@/lib/motion";
import { renderWithProfLinks } from "@/lib/render-links";

export const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 px-6 md:px-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={slideInFromLeft(0.2)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 opacity-30" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.period}
              variants={slideInFromLeft(0.3 + index * 0.15)}
              className="relative pl-10 pb-10 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 w-[16px] h-[16px] rounded-full bg-[#030014] border-2 border-purple-500 z-10" />

              <div
                className="bg-[#0a0520] border border-[#2A0E61] rounded-xl p-6 hover:border-purple-500/50 transition-all cursor-pointer"
                onClick={() =>
                  setExpanded(expanded === index ? null : index)
                }
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-white text-lg font-semibold">
                    {exp.role}
                  </h3>
                  <span className="text-purple-400 text-sm font-mono">
                    {exp.period}
                  </span>
                </div>

                <p className="text-cyan-400 text-sm mb-3">
                  {exp.organization}
                </p>

                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {renderWithProfLinks(exp.description)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

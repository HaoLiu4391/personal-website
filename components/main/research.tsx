"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { RESEARCH_FOCUS, RESEARCH_PROJECTS } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { renderWithProfLinks } from "@/lib/render-links";

export const Research = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

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

        {/* Research Focus */}
        <motion.h3
          variants={slideInFromLeft(0.3)}
          className="text-xl font-semibold text-white mb-6"
        >
          Research Focus
        </motion.h3>

        <motion.div
          variants={slideInFromLeft(0.35)}
          className="flex flex-wrap gap-3 mb-14"
        >
          {RESEARCH_FOCUS.map((focus) => (
            <span
              key={focus.label}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              <span>{focus.icon}</span>
              {focus.label}
            </span>
          ))}
        </motion.div>

        {/* Research Projects */}
        <motion.h3
          variants={slideInFromLeft(0.4)}
          className="text-xl font-semibold text-white mb-6"
        >
          Research Projects
        </motion.h3>

        <motion.p
          variants={slideInFromLeft(0.45)}
          className="text-gray-400 text-sm mb-8"
        >
          Click on any project to expand details.
        </motion.p>

        <div className="space-y-4">
          {RESEARCH_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              variants={
                index % 2 === 0
                  ? slideInFromLeft(0.4 + index * 0.05)
                  : slideInFromRight(0.4 + index * 0.05)
              }
              className="bg-[#0a0520] border border-[#2A0E61] rounded-xl p-5 hover:border-purple-500/50 transition-all cursor-pointer"
              onClick={() =>
                setExpandedProject(expandedProject === index ? null : index)
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-white text-base font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-1">
                    {renderWithProfLinks(project.advisors)}
                  </p>
                  <p className="text-purple-400 text-xs font-mono mb-2">
                    {project.period}
                  </p>
                </div>
                <span
                  className={`text-purple-400 text-lg transition-transform duration-300 mt-1 flex-shrink-0 ${
                    expandedProject === index ? "rotate-180" : ""
                  }`}
                >
                  &#9662;
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {expandedProject === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-purple-500/20">
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {renderWithProfLinks(project.description)}
                      </p>
                      {project.details.length > 0 && (
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
                      )}
                    </div>
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

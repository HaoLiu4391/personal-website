"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { RESEARCH_AREAS } from "@/constants";
import { slideInFromLeft } from "@/lib/motion";

export const Research = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="research" className="py-20 px-6 md:px-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={slideInFromLeft(0.2)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12"
        >
          Research
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_AREAS.map((area, index) => (
            <motion.div
              key={area.title}
              variants={slideInFromLeft(0.3 + index * 0.2)}
              className="group relative bg-[#0a0520] border border-[#2A0E61] rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{area.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
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

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ABOUT_TEXT, ABOUT_NEWS, HOBBIES, TIMELINE } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { HERO_CONTENT } from "@/constants";
import { renderWithProfLinks } from "@/lib/render-links";

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 px-6 md:px-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={slideInFromLeft(0.2)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8"
        >
          About Me
        </motion.h2>

        {/* News Banner */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl p-4 mb-8"
        >
          <span className="text-yellow-400 font-bold mr-2">News!!!</span>
          <span className="text-gray-300">{renderWithProfLinks(ABOUT_NEWS)}</span>
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={slideInFromLeft(0.4)}
          className="text-gray-300 text-base leading-relaxed mb-6 max-w-4xl space-y-4"
        >
          {ABOUT_TEXT.split("\n\n").map((paragraph, i) => (
            <p key={i}>{renderWithProfLinks(paragraph)}</p>
          ))}
        </motion.div>

        {/* Chinese Motto */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mb-8"
        >
          <p className="text-purple-300/60 italic text-lg">
            &ldquo;{HERO_CONTENT.chineseMotto}&rdquo;
          </p>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mb-16"
        >
          <span className="text-gray-500 text-sm">Hobbies: </span>
          <span className="text-gray-400 text-sm">{HOBBIES}</span>
        </motion.div>

        {/* Timeline */}
        <motion.h3
          variants={slideInFromLeft(0.5)}
          className="text-2xl font-semibold text-white mb-10"
        >
          Academic Journey
        </motion.h3>

        <div className="relative">
          <div className="absolute left-[21px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 opacity-30" />

          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.year}
              variants={
                index % 2 === 0
                  ? slideInFromLeft(0.3 + index * 0.1)
                  : slideInFromRight(0.3 + index * 0.1)
              }
              className={`relative flex flex-col md:flex-row items-start mb-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`ml-14 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="bg-[#0a0520] border border-[#2A0E61] rounded-xl p-5 hover:border-purple-500/50 transition-colors">
                  <span className="text-purple-400 text-sm font-mono">
                    {item.year}
                  </span>
                  <h4 className="text-white text-base font-semibold mt-1">
                    {item.title}
                  </h4>
                  <p className="text-cyan-400 text-sm mt-1">
                    {item.institution}
                  </p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {renderWithProfLinks(item.description)}
                  </p>
                </div>
              </div>

              <div className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 top-5 w-[32px] h-[32px] rounded-full bg-[#030014] border-2 border-purple-500 flex items-center justify-center z-10">
                <span className="text-base">{item.icon}</span>
              </div>

              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

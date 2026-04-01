"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { HERO_CONTENT } from "@/constants";
import { slideInFromLeft } from "@/lib/motion";

export const CVSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="cv" className="py-20 px-6 md:px-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={slideInFromLeft(0.2)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8"
        >
          Curriculum Vitae
        </motion.h2>

        <motion.p
          variants={slideInFromLeft(0.4)}
          className="text-gray-400 text-lg mb-8"
        >
          Download my full CV for a detailed overview of my academic background,
          research experience, publications, and skills.
        </motion.p>

        <motion.div variants={slideInFromLeft(0.6)} className="mb-8">
          <a
            href="/personal-website/Hao_Liu_CV.pdf"
            download
            className="inline-flex items-center gap-2 py-3 px-8 button-primary text-white cursor-pointer rounded-lg text-lg hover:opacity-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Download CV (PDF)
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-gray-500 text-sm space-y-1"
        >
          <p>
            Email:{" "}
            <a
              href={`mailto:${HERO_CONTENT.email}`}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              {HERO_CONTENT.email}
            </a>
          </p>
          <p>
            WeChat:{" "}
            <span className="text-gray-400">{HERO_CONTENT.wechat}</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

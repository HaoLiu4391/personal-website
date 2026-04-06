"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiExternalLink } from "react-icons/hi";

import { FRIENDS } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Friends = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="friends" className="py-20 px-6 md:px-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={slideInFromLeft(0.2)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-8"
        >
          Friends
        </motion.h2>

        <motion.p
          variants={slideInFromLeft(0.3)}
          className="text-gray-400 text-base mb-10 max-w-3xl"
        >
          一些在学术路上同行的好朋友们。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FRIENDS.map((friend, index) => (
            <motion.a
              key={friend.name}
              href={friend.website}
              target="_blank"
              rel="noopener noreferrer"
              variants={
                index % 2 === 0
                  ? slideInFromLeft(0.3 + index * 0.05)
                  : slideInFromRight(0.3 + index * 0.05)
              }
              className="bg-[#12100a] border border-[#1c1408] rounded-xl p-6 hover:border-amber-500/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-semibold text-lg">
                  {friend.name.charAt(0)}
                </div>
                <HiExternalLink className="text-gray-600 group-hover:text-amber-400 transition-colors" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {friend.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {friend.description}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

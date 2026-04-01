"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SKILL_CATEGORIES, COURSES } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-6 md:px-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={slideInFromLeft(0.2)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={
                catIndex % 2 === 0
                  ? slideInFromLeft(0.3 + catIndex * 0.1)
                  : slideInFromRight(0.3 + catIndex * 0.1)
              }
              className="bg-[#12100a] border border-[#1c1408] rounded-xl p-6"
            >
              <h3 className="text-white text-lg font-semibold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="text-sm px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/40 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Online Courses */}
        <motion.div variants={slideInFromLeft(0.6)}>
          <h3 className="text-xl font-semibold text-white mb-6">
            Selected Online Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COURSES.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="bg-[#12100a] border border-[#1c1408] rounded-lg p-4 hover:border-amber-500/50 transition-colors"
              >
                <h4 className="text-white text-sm font-semibold">
                  {course.name}
                </h4>
                <p className="text-orange-400 text-xs mt-1">{course.topic}</p>
                <p className="text-gray-500 text-xs mt-1 font-mono">
                  {course.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

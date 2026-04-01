"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SKILL_CATEGORIES, COURSES } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

const SkillBar = ({
  name,
  level,
  delay,
  inView,
}: {
  name: string;
  level: number;
  delay: number;
  inView: boolean;
}) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-gray-300">{name}</span>
      <span className="text-purple-400 font-mono">{level}%</span>
    </div>
    <div className="h-2 bg-[#1a0a3e] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
      />
    </div>
  </div>
);

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
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={
                catIndex === 0
                  ? slideInFromLeft(0.3)
                  : catIndex === 1
                  ? slideInFromLeft(0.5)
                  : slideInFromRight(0.3)
              }
              className="bg-[#0a0520] border border-[#2A0E61] rounded-xl p-6"
            >
              <h3 className="text-white text-lg font-semibold mb-6">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={0.3 + catIndex * 0.2 + skillIndex * 0.1}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Online Courses */}
        <motion.div variants={slideInFromLeft(0.6)}>
          <h3 className="text-xl font-semibold text-white mb-6">
            Selected Online Courses
          </h3>
          <div className="flex flex-wrap gap-3">
            {COURSES.map((course) => (
              <span
                key={course}
                className="text-sm px-4 py-2 rounded-lg bg-[#0a0520] border border-[#2A0E61] text-gray-300 hover:border-purple-500/50 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

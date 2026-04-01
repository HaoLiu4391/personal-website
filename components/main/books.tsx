"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { BOOKS } from "@/constants";
import { slideInFromLeft } from "@/lib/motion";

export const Books = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(BOOKS.map((b) => b.category)));
    return ["All", ...cats];
  }, []);

  const filteredBooks = useMemo(() => {
    if (activeCategory === "All") return BOOKS;
    return BOOKS.filter((b) => b.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="books" className="py-20 px-6 md:px-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={slideInFromLeft(0.2)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-4"
        >
          Reading List (since 2024)
        </motion.h2>

        <motion.p
          variants={slideInFromLeft(0.3)}
          className="text-gray-400 text-sm mb-8"
        >
          Books that have shaped my thinking across disciplines.
        </motion.p>

        {/* Category Filters */}
        <motion.div
          variants={slideInFromLeft(0.4)}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                  : "border-[#1c1408] text-gray-400 hover:border-amber-500/30 hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredBooks.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 15 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
              }
              transition={{ duration: 0.3, delay: 0.2 + index * 0.03 }}
              className="bg-[#12100a] border border-[#1c1408] rounded-xl p-4 hover:border-amber-500/50 transition-colors"
            >
              <h4 className="text-white text-sm font-semibold leading-snug">
                {book.title}
              </h4>
              <p className="text-gray-400 text-xs mt-1">{book.author}</p>
              <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">
                {book.category}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

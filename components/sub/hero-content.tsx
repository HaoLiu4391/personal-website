"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

import { HERO_CONTENT, SOCIALS } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Cognitive Science & AI Research
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {HERO_CONTENT.name}
            </span>
            <span className="text-2xl md:text-3xl text-gray-400 ml-3">
              ({HERO_CONTENT.chineseName})
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-xl md:text-2xl text-gray-300 font-medium h-[40px]"
        >
          <TypeAnimation
            sequence={HERO_CONTENT.roles}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
          />
        </motion.div>

        <motion.p
          variants={slideInFromLeft(1)}
          className="text-base md:text-lg text-gray-400 my-3 max-w-[600px]"
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* Motto */}
        <motion.div
          variants={slideInFromLeft(1.1)}
          className="max-w-[580px] mt-1"
        >
          <p className="text-lg italic text-purple-300/70 leading-relaxed">
            {HERO_CONTENT.motto}
          </p>
          <p className="text-sm text-purple-400/50 mt-1">
            {HERO_CONTENT.mottoAuthor}
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1.2)}
          className="flex flex-row gap-4 mt-3"
        >
          <Link
            href="#publications"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm"
          >
            View Publications
          </Link>
          <Link
            href="#cv"
            className="py-2 px-6 border border-[#7042f88b] text-center text-gray-300 cursor-pointer rounded-lg text-sm hover:bg-[#7042f815] transition"
          >
            Download CV
          </Link>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1.4)}
          className="flex flex-row gap-5 mt-4"
        >
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className="text-gray-400 hover:text-purple-400 transition-colors"
              title={name}
            >
              <Icon className="h-6 w-6" />
            </Link>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full h-full justify-end items-center relative"
      >
        <div className="relative w-[450px] h-[350px] overflow-hidden rounded-xl">
          {/* Left fade gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#030014] via-[#030014]/60 to-transparent" />
          <img
            src="/personal-website/profile.jpg"
            alt="Hao Liu"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsFillTelephoneFill, BsTelephoneFill } from "react-icons/bs";
import AnimatedLogo from "./AnimatedLogo";

export default function Hero() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex gap-12 items-center flex-col"
    >
      <div className="flex w-full items-center gap-8 flex-col md:flex-row">
        <div>
          <AnimatedLogo className="h-24 md:h-32" />
        </div>

        <div className="whitespace-nowrap w-full">
          <p className="text-xl lg:text-3xl xl:text-4xl font-semibold text-gray-300">
            Halo, nama saya
          </p>
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-2 md:mb-4">
            Ansell Maximilian
          </h1>
          <p className="text-xl lg:text-3xl xl:text-4xl">
            Web and Systems Developer
          </p>
        </div>
      </div>
      <div>
        <p className="mb-4">
          A computer science graduate majoring in information systems. My
          strength lies in crafting front-end solutions, which I&apos;ve applied
          professionally. I focus on creating user-centered interfaces and enjoy
          using React and Tailwind for the job. I also love participating in
          hackathons and trying to develop creative solutions with new
          technologies.
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <a
            href="#contact-section"
            className="flex gap-2 items-center bg-white text-black hover:bg-gray-300 border-2 border-white px-4 py-2 font-bold hover:border-gray-300 transition-all duration-100"
          >
            <BsTelephoneFill />
            <span>Contact Me</span>
          </a>
          <Link
            href="/Ansell_Maximilian_Resume.pdf"
            target="_blank"
            className="hover:bg-gray-300 border-2 border-white px-4 py-2 font-bold hover:border-gray-300 transition-all duration-100 hover:text-black"
          >
            Resume
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

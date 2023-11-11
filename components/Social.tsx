"use client";
import React, { ReactNode, useEffect, useState } from "react";

import { twMerge as cn } from "tailwind-merge";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Social = ({
  icon,
  className,
  text,
  href,
  side = "LEFT",
}: {
  icon: ReactNode;
  text: string;
  className?: string;
  href: string;
  side?: "RIGHT" | "LEFT";
}) => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const [transitionEnd, setTransitionEnd] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      onTransitionEnd={() => {
        setTransitionEnd(true);
      }}
      className={cn(
        "bg-gradient-to-b bg-[#2a2a2a] p-4 rounded-md border border-[#dadada] flex gap-4 shadow-md shadow-[#585858] items-center hover:bg-white hover:text-black transition-all duration-100 text-sm md:text-base group",

        inView || hasAnimated
          ? `translate-x-0 duration-1000 opacity-100`
          : `${
              side === "LEFT"
                ? "-translate-x-32 md:-translate-x-64"
                : "translate-x-32 md:translate-x-64"
            } duration-500 opacity-0`,
        className,
        transitionEnd ? "duration-100" : ""
      )}
    >
      {icon}
      <div>{text}</div>
    </motion.a>
  );
};

export default Social;

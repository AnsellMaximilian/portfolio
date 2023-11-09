"use client";

import React from "react";
import { Variants, motion } from "framer-motion";

const pathVariants: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "white",
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    fill: "rgba(255, 255, 255, 1)",
    stroke: "white",
  },
};

export default function AnimatedLogo() {
  return (
    <svg
      width="122.16553mm"
      height="69.973457mm"
      viewBox="0 0 122.16553 69.973457"
      version="1.1"
      id="svg5"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs2" />
      <g id="layer1" transform="translate(-14.444263,-100.31199)">
        <motion.path
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d="m 118.52706,170.15195 -22.316134,-38.6533 -8.92655,15.46195 -8.927211,-15.46173 17.853462,-30.9223 40.170023,69.57538 z"
        />
        <motion.path
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d="M 95.012855,170.15315 54.843227,100.57657 14.673398,170.15315 H 71.495935 L 62.568639,154.69164 H 41.453808 l 13.389803,-23.19179 22.316124,38.6533 z"
        />
      </g>
    </svg>
  );
}

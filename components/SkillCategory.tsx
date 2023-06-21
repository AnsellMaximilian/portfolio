"use client";

import { SkillCategory } from "@/sanity/schemas/skill-category-schema";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function SkillCategory({
  isEven,
  skillCategory,
}: {
  isEven: boolean;
  skillCategory: SkillCategory;
}) {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);
  return (
    <div
      ref={ref}
      className={`bg-gradient-to-b from-primary-base to-primary-light col-start-1 col-end-13 shadow-lg pb-10 md:pb-16 mt-0 md:-mt-16 transition-all ${
        isEven
          ? "md:col-start-1 md:col-end-11 lg:col-end-9"
          : "md:col-end-13 md:col-start-3 lg:col-start-5"
      } ${
        inView || hasAnimated
          ? "translate-x-0 duration-1000 opacity-100"
          : `${
              isEven ? "-translate-x-64" : "translate-x-64"
            } duration-500 opacity-0`
      }`}
    >
      <h3 className="text-white p-4 font-semibold">{skillCategory.name}</h3>
      <ul className="grid grid-cols-12 gap-4 px-4 pb-4">
        {skillCategory.skills.map((skill) => (
          <li
            key={skill._id}
            className="col-span-6 sm:col-span-4 xl:col-span-3"
          >
            <div className="bg-white flex items-center gap-4 p-4">
              <Image
                src={skill.image}
                width={50}
                height={50}
                alt={skill.image}
                className="w-8 md:w-10"
              />
              <h4 className="font-semibold text-sm md:text-base">
                {skill.name}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

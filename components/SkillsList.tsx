import { SkillCategory } from "@/sanity/schemas/skill-category-schema";
import SkillCategoryComponent from "@/components/SkillCategory";
import Image from "next/image";
import React from "react";

export default function SkillsList({
  skillCategories,
}: {
  skillCategories: SkillCategory[];
}) {
  return (
    <div className="grid grid-cols-12 gap-8">
      {skillCategories.map((cat, index) => {
        const isEven = index % 2 === 0;
        return (
          <SkillCategoryComponent
            key={cat._id}
            isEven={isEven}
            skillCategory={cat}
          />
        );
      })}
    </div>
  );
}

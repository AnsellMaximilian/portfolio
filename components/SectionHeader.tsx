import React from "react";
import { twMerge as cn } from "tailwind-merge";

type Props = {
  title: string;
  subtitle?: string;
  containerClasses?: string;
  titleClasses?: string;
  subtitleClasses?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  containerClasses,
  titleClasses,
  subtitleClasses,
}: Props) {
  return (
    <div className={cn("mb-8", containerClasses)}>
      <h2 className={cn("text-4xl font-bold text-center", titleClasses)}>
        {title}
      </h2>
      <p className={cn("text-2xl font-light text-center", subtitleClasses)}>
        {subtitle}
      </p>
    </div>
  );
}

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { ProjectScreenshot } from "@/sanity/schemas/project-schema";

export default function ScreenshotList({
  screenshots,
}: {
  screenshots: ProjectScreenshot[];
}) {
  return (
    <Swiper
      loop
      spaceBetween={50}
      slidesPerView={2}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      modules={[Autoplay]}
      centeredSlides
      // breakpoints={{
      //   1024: {
      //     slidesPerView: screenshots.length > 3 ? 3 : 2,
      //   },
      // }}
    >
      {screenshots.map((ss) => {
        return (
          <SwiperSlide key={ss._key}>
            <div className="group relative border border-gray-200">
              <div className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 transition-all duration-200"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 translate-y-96 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-sm">{ss.description}</p>
              </div>
              <Image
                src={ss.url}
                width={400}
                height={300}
                alt={ss.description}
                className="w-full"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

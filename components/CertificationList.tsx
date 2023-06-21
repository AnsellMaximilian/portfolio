"use client";

import { Certification } from "@/sanity/schemas/certification-schema";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import Link from "next/link";

export default function CertificationList({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <Swiper
      loop
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      modules={[Autoplay]}
      centeredSlides
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {certifications.map((cert) => {
        return (
          <SwiperSlide key={cert._id}>
            <a href={cert.url} className="block" target="_blank">
              <div className="group relative">
                <div className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 transition-all duration-200"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 translate-y-96 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="mb-2 text-sm">{cert.organization}</p>
                  <p className="text-sm">{cert.description}</p>
                </div>
                <Image
                  src={cert.image}
                  width={400}
                  height={300}
                  alt={cert.name}
                  className="w-full"
                />
              </div>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

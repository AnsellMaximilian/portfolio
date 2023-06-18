"use client";

import { Certification } from "@/sanity/schemas/certification-schema";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Image from "next/image";

export default async function CertificationList({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <Swiper
      loop
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      modules={[Autoplay]}
      centeredSlides
    >
      {certifications.map((cert) => {
        return (
          <SwiperSlide key={cert._id}>
            <Image src={cert.image} width={400} height={300} alt={cert.name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

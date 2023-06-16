import React from "react";

export default function HeroContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-white bg-gradient-to-b from-[#121212] to-[#3d3d3d] pt-24">
      <div className="container mx-auto px-4 py-32">{children}</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className="fill-white"
          fillOpacity="1"
          d="M0,64L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

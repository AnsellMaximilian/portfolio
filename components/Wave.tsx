import React from "react";
interface Props {
  reverse?: boolean;
  direction: "to right" | "to left";
  className: string;
}

export default function Wave({ className, direction }: Props) {
  if (direction === "to left")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className={className}
          fillOpacity="1"
          d="M 1440,64 0,224 v 96 h 1440 z"
          id="path10"
        />
      </svg>
    );

  if (direction === "to right")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className={className}
          fillOpacity="1"
          d="M0,64L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    );
}

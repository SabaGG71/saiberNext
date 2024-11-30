import React from "react";
import { twMerge } from "tailwind-merge";

export default function Key({ children, className }) {
  return (
    <div
      className={twMerge(
        "size-14 bg-neutral-300 inline-flex justify-center items-center rounded-2xl text-xl text-primary-800 font-medium",
        className
      )}
    >
      {children}
    </div>
  );
}

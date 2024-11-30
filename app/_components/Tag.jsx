import React from "react";
import { twMerge } from "tailwind-merge";

export default function Tag({ className, children }) {
  return (
    <div
      className={twMerge(
        "inline-flex border border-[#fff] mb-5 gap-2 text-[#fff] px-3 py-1 rounded-full text-lg xl:text-xl",
        className
      )}
    >
      <span>&#10038;</span>
      <span>{children}</span>
    </div>
  );
}

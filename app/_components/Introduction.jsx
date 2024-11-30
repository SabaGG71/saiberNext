"use client";
import { useEffect, useRef, useState } from "react";
import Tag from "./Tag";
import {
  delay,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { twMerge } from "tailwind-merge";
const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setProgress(latest);
    });

    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [scrollYProgress, wordIndex]);

  return (
    <section className="py-28 px-4 max-sm:py-24 lg:py-40">
      <div className="container custom-container">
        <div className="sticky top-36">
          <div className="flex justify-center">
            <Tag>Introducing layers</Tag>
          </div>
          <div className="text-4xl max-sm:text-3xl max-sm:px-3 max-md:text-5xl md:text-5xl xl:text-7xl text-center font-medium mt-12">
            <span className="text-[#fff]">
              Your creative process deserves better.{" "}
            </span>
            <span className="text-white/15">
              {words.map((word, wordIndex) => {
                return (
                  <span
                    className={twMerge(
                      "transition duration-600",
                      wordIndex < currentWord && "text-white"
                    )}
                    key={wordIndex}
                  >{`${word} `}</span>
                );
              })}
            </span>
            <span ref={scrollTarget} className="text-primary-400 font-bold">
              {" "}
              That&apos;s why we built layers.{" "}
              {` ${progress >= 0 && progress <= 0.3 ? "✨" : ""} ${
                progress >= 0.3 && progress <= 0.5 ? "🎊" : ""
              } ${progress > 0.5 && progress <= 0.7 ? "🌙" : ""} ${
                progress > 0.7 ? "💫" : ""
              }`}
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}

"use client";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);
  return (
    <section className="py-24 lg:mt-12 max-lg:mt-4">
      <Link href="/" className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-5xl lg:text-6xl xl:text-8xl font-bold group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 lg:gap-9 xl:gap-16">
              <span className="bg-primary-600 text-primary-400 rounded-full p-2 px-4">
                &#10033;
              </span>
              <span className="group-hover:text-primary-400 transition duration-200 group-hover:scale-95">
                Try it for free
              </span>
            </div>
          ))}
        </motion.div>
      </Link>
    </section>
  );
}

"use client";
import Button from "./Button";
import designExample1 from "../../public/images/design-example-1.svg";
import designExample2 from "../../public/images/design-example-2.svg";
import Image from "next/image";
import Pointers from "./Pointers";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYou from "../../public/images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, letftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    letftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.7 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.7 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.7 }],
      [leftPointerScope.current, { y: -20, x: 0 }, { duration: 0.7 }],
      [
        leftPointerScope.current,
        { x: 0, y: [-20, 80], x: 30 },
        { duration: 1.5, ease: "easeInOut" },
      ],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
    ]);
    rightPointerAnimate([
      [rightPointerScope.current, { x: 60, y: 0 }, { duration: 1, delay: 1.5 }],
      [
        rightPointerScope.current,
        { x: 80, y: [20, -40] },
        { duration: 1, delay: 1.2 },
      ],
    ]);
  }, []);

  return (
    <section
      className="pb-[105px] overflow-x-clip pt-[220px] px-4"
      style={{ cursor: `url(${cursorYou.src}), auto` }}
    >
      <div className="container relative custom-container">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          dragConstraints={{ top: 0, left: 0, right: -30, bottom: 0 }}
          className="absolute max-2xl:-left-[190px] max-2xl:top-[300px] -left-[200px] top-[220px] hidden xl:block"
        >
          <Image
            src={designExample1}
            quality={100}
            alt="design example 1 image"
            draggable="false"
          />
        </motion.div>

        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -220 }}
          className="absolute max-2xl:top-[500px] left-[175px] top-[400px]  hidden xl:block"
        >
          <Pointers name="Saba" />
        </motion.div>

        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          dragConstraints={{ top: 0, left: -30, right: 0, bottom: 0 }}
          className="absolute max-2xl:-right-[250px] max-2xl:top-[350px] -right-[220px] -top-1  hidden xl:block"
        >
          <Image
            src={designExample2}
            quality={100}
            draggable="false"
            alt="design example 2 image"
          />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute right-[280px] -top-6 max-2xl:top-[580px] max-2xl:right-68 hidden xl:block"
        >
          <Pointers name="John" color="orange" />
        </motion.div>
        <div className="flex justify-center">
          <p className="inline-flex py-1 px-3 bg-gradient-to-r from-[#775ADA] to-[#28c7fa] rounded-full font-bold tracking-tighter text-white">
            ✨ $7.5M seed round raised
          </p>
        </div>
        <h1 className="text-center md:text-6xl lg:text-6xl lg:max-w-3xl xl:text-8xl mx-auto xl:max-w-5xl max-md:text-4xl max-[627px]:text-3xl font-medium mt-6">
          Design that makes an impact, effortlessly
        </h1>
        <p className="text-center max-w-2xl max-lg:max-w-xl text-2xl max-lg:text-xl mx-auto  max-sm:text-lg text-white/50 mt-8 max-sm:mt-6">
          Our platform makes designing easy, with intuitive tools that allow you
          to create professional, visually stunning results.
        </p>
        <form className="flex border border-white/15 max-md:mt-9 rounded-full p-2 xl:p-2 mt-14 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 max-[345px]:mr-[-1rem] outline-none flex-1 w-full xl:text-xl"
          />
          <div>
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

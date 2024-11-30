"use client";
import quantumLogo from "../../public/images/celestial.svg";
import acmeLogo from "../../public/images/acme-corp.svg";
import echoValleyLogo from "../../public/images/echo-valley.svg";
import pulseLogo from "../../public/images/pulse.svg";
import outsideLogo from "../../public/images/outside.svg";
import apexLogo from "../../public/images/apex.svg";
import celestialLogo from "../../public/images/celestial.svg";
import twiceLogo from "../../public/images/twice.svg";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className="xl:pt-[520px] 2xl:pt-64 max-sm:py-12 pb-[160px] max-xl:py-24 overflow-x-clip">
      <div className="container custom-container">
        <h3 className="text-center text-white/50 text-xl max-sm:max-w-72 mx-auto lg:text-2xl">
          Already chosen by these market leaders
        </h3>
        <div className="flex overflow-hidden justify-center max-sm:mt-[70px] mt-14 logoTicker-mask">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="flex gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo) => (
                  <Image src={logo.image} key={logo.name} alt={logo.name} />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

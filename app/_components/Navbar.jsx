"use client";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
import SignInButton from "./SignInButton";
import LogIn from "./LogIn";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-6 px-4 lg:py-8 fixed w-full top-0 z-50 ">
      <div className="container custom-container ">
        <div
          className={`border border-white/15 bg-primary-900/70 backdrop-blur ${
            isOpen ? "rounded-[20px]" : "rounded-full"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-3  p-2 items-center px-4 sm:pr-3 ">
            <Link href="/">
              <Image
                src={logo}
                alt="CyberNext Logo"
                className="h-9 md:h-10 w-auto cursor-pointer"
              />
            </Link>
            <div className="lg:flex justify-center items-center hidden">
              <nav className="flex gap-9 font-medium">
                <Link
                  href="/"
                  className="hover:text-primary-300 transition duration-150"
                >
                  Home
                </Link>
                <Link
                  className="hover:text-primary-300 transition duration-150"
                  href="/features"
                >
                  Features
                </Link>
                <Link
                  className="hover:text-primary-300 transition duration-150"
                  href="/integrations"
                >
                  Integrations
                </Link>
                <Link
                  className="hover:text-primary-300 transition duration-150"
                  href="/faqs"
                >
                  FAQS
                </Link>
              </nav>
            </div>
            <div className="flex justify-end gap-2 md:mr-[-2px] lg:mr-[-6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather cursor-pointer feather-menu md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "rotate-45 -translate-y-1"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={("transition", twMerge(isOpen && "opacity-0"))}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition", // Ensure this is included
                    isOpen && "-rotate-45 translate-y-1"
                  )}
                ></line>
              </svg>
              <LogIn className="hidden">Log In</LogIn>
              <SignInButton className="hidden">Sign Up</SignInButton>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col md:hidden items-center gap-4 py-4">
                  <Link href="/" className="py-2">
                    Home
                  </Link>
                  <Link href="/features" className="py-2">
                    Features
                  </Link>
                  <Link href="/integrations" className="py-2">
                    Integrations
                  </Link>
                  <Link href="/faqs" className="py-2">
                    FAQS
                  </Link>
                  <LogIn>Log In</LogIn>
                  <SignInButton>Log In</SignInButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

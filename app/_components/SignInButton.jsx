import { twMerge } from "tailwind-merge";

export default function Button({ children, type, className }) {
  return (
    <button
      type={type}
      className={twMerge(
        `bg-accent-500 hover:bg-accent-700 transition duration-200 md:inline-flex items-center text-neutrual-950 border-accent-400 rounded-full h-10 px-6 font-medium`,
        className
      )}
    >
      {children}
    </button>
  );
}

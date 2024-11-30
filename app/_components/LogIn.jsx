import { twMerge } from "tailwind-merge";

export default function InlineButton({ className, children }) {
  return (
    <button
      className={twMerge(
        "border md:inline-flex items-center border-white/50  h-10 rounded-full text-white px-6 font-medium hover:text-primary-500 hover:bg-white transition duration-200",
        className
      )}
    >
      {children}
    </button>
  );
}

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Avatar({ children, className }) {
  return (
    <div
      className={twMerge(
        "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-primary-800",
        className
      )}
    >
      {children}
    </div>
  );
}

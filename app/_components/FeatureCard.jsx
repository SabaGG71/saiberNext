import { twMerge } from "tailwind-merge";

export default function FeatureCard({
  title,
  className,
  description,
  children,
}) {
  return (
    <div
      className={twMerge(
        "bg-primary-800 border border-white/10 p-6 rounded-3xl",
        className
      )}
    >
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 text-[18px] mt-5 ">{description}</p>
      </div>
    </div>
  );
}

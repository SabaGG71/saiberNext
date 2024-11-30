import FeatureCard from "./FeatureCard";
import Tag from "./Tag";
import avatar1 from "../../public/images/avatar-ashwin-santiago.jpg";
import avatar2 from "../../public/images/avatar-lula-meyers.jpg";
import avatar3 from "../../public/images/avatar-florence-shaw.jpg";
import avatar4 from "../../public/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "./Avatar";
import Key from "./Key";

const features = [
  "Assets Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guide",
];
export default function Features() {
  return (
    <section className="py-24 px-4">
      <div className="container custom-container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="max-sm:text-3xl text-6xl max-w-2xl mx-auto mt-6 font-medium text-center">
          Where power meets{" "}
          <span className="text-primary-400 font-bold">simplicity</span>
        </h2>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 lg:grid-cols-3">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image className="rounded-full" src={avatar1} alt="avatar 1" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image className="rounded-full" src={avatar2} alt="avatar 2" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image className="rounded-full" src={avatar3} alt="avatar 3" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                <div className="size-full relative bg-neutral-700 rounded-full inline-flex justify-center items-center gap-1">
                  <Image
                    src={avatar4}
                    alt="Avatar 4"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="size-1.5 rounded-full inline-flex bg-white"
                      key={i}
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that engage to user actions"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video inline-flex items-center justify-center">
              <p className="text-4xl max-xs:text-2xl font-bold text-white/20 text-center items-center justify-center group-hover:text-white transition-all duration-150">
                We&apos;ve achieved{" "}
                <span className="bg-gradient-to-r relative from-[#fff] to-[#28c7fa] bg-clip-text group-hover:from-[#8A7FF0] group-hover:to-[#8A7FF0] text-transparent transition-all duration-150">
                  <span>Incredible</span>
                  {/* <video
                    src="/assets/gif-cat.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-2xl h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl opacity-0"
                    alt="gif"
                  ></video> */}
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly"
            className="md:col-span-2 md:col-start-2  lg:col-span-1 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-[16px]">
              <Key className="w-28 group-hover:outline outline-3 outline-transparent outline-offset-4 group-hover:outline-primary-400 duration-500 group-hover:translate-y-2 transition-all">
                Shift
              </Key>
              <Key className="group-hover:outline outline-3 outline-transparent outline-offset-4 duration-500 group-hover:outline-primary-200 transition-all group-hover:translate-y-2 delay-150">
                alt
              </Key>
              <Key className="group-hover:outline outline-3  transition-all duration-500 outline-transparent outline-offset-4 group-hover:outline-primary-200 group-hover:translate-y-2 delay-300">
                C
              </Key>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-primary-600 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center md:px-5 md:py-2 hover:scale-105 transition duration-500 cursor-pointer group"
            >
              <span className="bg-primary-400 text-white size-5 rounded-full inline-flex items-center text-xl justify-center group-hover:rotate-[135deg] transition duration-500">
                &#10038;
              </span>
              <span className="text-base md:text-xl">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
